/* eslint-disable no-param-reassign */
import { DataTypes } from 'sequelize';
import mysql from '@/db/mysql';

export default function defineModel(
  name: string,
  attributes: Record<string, any>,
  options: Record<string, any> = {},
) {
  let attrs: Record<string, any> = {};
  Object.keys(attributes).forEach((key: string) => {
    const value = attributes[key];
    if (typeof value === 'object' && value.type) {
      value.allowNull = value.allowNull || false;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: false,
      };
    }
  });
  attrs = {
    // 主键
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: '主键',
    },
    ...attrs,
    // 创建时间
    createdAt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '创建时间',
    },
    // 更新时间
    updatedAt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '更新时间',
    },
    // 版本号
    version: {
      type: DataTypes.BIGINT,
      allowNull: false,
      comment: '版本号',
    },
  };
  return mysql.define(name, attrs, {
    tableName: name,
    timestamps: false,
    hooks: {
      beforeValidate: async (record: any) => {
        const now = Date.now();
        if (record.isNewRecord) { // create
          record.createdAt = now;
          record.updatedAt = now;
          record.version = 0;
        } else { // update
          record.updatedAt = Date.now();
          record.version += 1;
        }
      },
      beforeBulkCreate: async (records: any[]) => { // bulkCreate
        const now = Date.now();
        records.forEach((record: any) => {
          record.createdAt = now;
          record.updatedAt = now;
          record.version = 0;
        });
      },
    },
    ...options,
  });
}
