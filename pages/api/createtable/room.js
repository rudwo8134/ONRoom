import { sql_query } from '../../../lib/db';

const handler = async (req, res) => {
  try {
    const results = await sql_query(`
          CREATE TABLE rooms(
            id INT(11) NOT NULL AUTO_INCREMENT,
            title VARCHAR(30) NOT NULL,
            address VARCHAR(30) NOT NULL,
            description TEXT NOT NULL,
            price VARCHAR(30) NOT NULL,
            priceoption VARCHAR(30) NOT NULL,
            numberBath INT(11) NOT NULL,
            numberBed INT(11) NOT NULL,
            userID INT(11) NOT NULL,
            tagid INT(11) NULL,
            create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            update_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
          );
        `);

    return res.status(200).json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
