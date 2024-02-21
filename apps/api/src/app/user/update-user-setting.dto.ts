import type {
  ColorScheme,
  DateRange,
  ViewMode
} from '@ghostfolio/common/types';

import {
  IsArray,
  IsBoolean,
  IsISO8601,
  IsIn,
  IsNumber,
  IsOptional,
  IsString
} from 'class-validator';

export class UpdateUserSettingDto {
  @IsNumber()
  @IsOptional()
  annualInterestRate?: number;

  @IsOptional()
  @IsString()
  baseCurrency?: string;

  @IsString()
  @IsOptional()
  benchmark?: string;

  @IsIn(<ColorScheme[]>['DARK', 'LIGHT'])
  @IsOptional()
  colorScheme?: ColorScheme;

  @IsIn(<DateRange[]>[
    '1d',
    '5d',
    '1w',
    '1m',
    '3m',
    '6m',
    '1y',
    '3y',
    '5y',
    'max',
    'ytd',
    'wtd'
  ])
  @IsOptional()
  dateRange?: DateRange;

  @IsNumber()
  @IsOptional()
  emergencyFund?: number;

  @IsArray()
  @IsOptional()
  'filters.accounts'?: string[];

  @IsArray()
  @IsOptional()
  'filters.assetClasses'?: string[];

  @IsArray()
  @IsOptional()
  'filters.tags'?: string[];

  @IsBoolean()
  @IsOptional()
  isExperimentalFeatures?: boolean;

  @IsBoolean()
  @IsOptional()
  isRestrictedView?: boolean;

  @IsString()
  @IsOptional()
  language?: string;

  @IsString()
  @IsOptional()
  locale?: string;

  @IsNumber()
  @IsOptional()
  projectedTotalAmount?: number;

  @IsISO8601()
  @IsOptional()
  retirementDate?: string;

  @IsNumber()
  @IsOptional()
  savingsRate?: number;

  @IsIn(<ViewMode[]>['DEFAULT', 'ZEN'])
  @IsOptional()
  viewMode?: ViewMode;
}
