import { Client } from 'pg'
import { SQLStatement } from 'sql-template-strings'

let client:Client = null

class PostgresClient {
  async connect() {
    client = new Client({
      connectionString: process.env.DATABASE_URL,
      ssl: true
    })

    await client.connect()
  }

  async query<T>(sql:SQLStatement, mapper?:MapperFunc<T>) : Promise<T[]> {
    const res = await client.query(sql.text, sql.values)
    return mapper ? res.rows.map(mapper) : res.rows
  }

  async queryFirst<T>(sql:SQLStatement, mapper?:MapperFunc<T>) : Promise<any> {
    const rows = await this.query(sql, mapper)
    return rows[0]
  }
}

export default new PostgresClient()

type MapperFunc<T> = (row:any) => T


