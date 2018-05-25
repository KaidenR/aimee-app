import sql from 'sql-template-strings'
import pg from '../../common/postgres-client'

const mapSystemInfo = (row:any) => ({
  lastConnectionDate: row.last_connection_date
})

const mapDbInfo = (row:any) => ({
  totalSequentialScans: row.total_seq_scans
})

export async function get() : Promise<SystemInfo> {
  return pg.queryFirst(sql`select * from system;`, mapSystemInfo)
}

export async function getDbInfo() : Promise<DbInfo> {
  const query = sql`select sum(seq_scan) as total_seq_scans from pg_stat_user_tables;`
  return pg.queryFirst(query, mapDbInfo)
}

export async function updateLastConnectedDate() {
  await pg.query(sql`update system set last_connection_date = now();`)
}

export interface SystemInfo {
  lastConnectionDate:Date
}

export interface DbInfo {
  totalSequentialScans:number
}