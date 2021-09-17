import { sql_query } from '../../../lib/db';

const handler = async (req, res) => {
    try {
      const results = await sql_query(`
          CREATE TABLE user(
            id INT(11) NOT NULL AUTO_INCREMENT,
            name VARCHAR(30) NOT NULL,
            password VARCHAR(30) NOT NULL,
            description TEXT NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            recent_login DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          );
        `);

      return res.status(200).json(results);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  
};

export default handler;
