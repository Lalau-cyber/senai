import pg from 'pg';
const { Pool } = pg;

// Criamos uma nova instância do Pool de conexões
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'cafeterias',
  password: 'senai',
  port: 5173,
});

export default pool;
