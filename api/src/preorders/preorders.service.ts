import { Injectable, OnModuleInit } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import type { CreatePreorderDto } from './dto/create-preorder.dto.js';

export type PreorderRecord = CreatePreorderDto & {
  id: string;
  createdAt: string;
};

@Injectable()
export class PreordersService implements OnModuleInit {
  private items: PreorderRecord[] = [];
  private readonly filePath = join(process.cwd(), 'data', 'preorders.json');

  onModuleInit(): void {
    this.loadFromDisk();
  }

  create(dto: CreatePreorderDto): Pick<PreorderRecord, 'id' | 'createdAt'> {
    const record: PreorderRecord = {
      id: randomUUID(),
      createdAt: new Date().toISOString(),
      ...dto,
    };

    this.items.push(record);
    this.saveToDisk();

    return {
      id: record.id,
      createdAt: record.createdAt,
    };
  }

  private loadFromDisk(): void {
    try {
      if (!existsSync(this.filePath)) {
        return;
      }

      const raw = readFileSync(this.filePath, 'utf8');
      const parsed: unknown = JSON.parse(raw);

      if (!Array.isArray(parsed)) {
        this.items = [];
        return;
      }

      this.items = parsed.filter(isPreorderRecord);
    } catch {
      this.items = [];
    }
  }

  private saveToDisk(): void {
    const directory = dirname(this.filePath);

    if (!existsSync(directory)) {
      mkdirSync(directory, { recursive: true });
    }

    writeFileSync(this.filePath, JSON.stringify(this.items, null, 2), 'utf8');
  }
}

function isPreorderRecord(value: unknown): value is PreorderRecord {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  if (
    !('id' in value) ||
    !('createdAt' in value) ||
    !('name' in value) ||
    !('phone' in value) ||
    !('email' in value) ||
    !('tariffId' in value)
  ) {
    return false;
  }

  return (
    typeof value.id === 'string' &&
    typeof value.createdAt === 'string' &&
    typeof value.name === 'string' &&
    typeof value.phone === 'string' &&
    typeof value.email === 'string' &&
    (value.tariffId === 'solo' || value.tariffId === 'support')
  );
}
