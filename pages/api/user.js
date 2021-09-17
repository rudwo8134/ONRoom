import { sql_query } from "../../lib/db";

const handler = async(req,res)=>{
  if(req.method==="GET"){
    try {
      const results = await sql_query(`
    SELECT * FROM user
    `);

      return res.status(200).json(results);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
  else if(req.method==="POST"){
    try{
      const {id,password,description} = JSON.parse(req.body)
      const results = await sql_query(`
        INSERT INTO user (name,password,description) VALUES("${id}","${password}","${description}");
      `);
      res.status(201).json(results)
    }catch(e){
       res.status(500).json({ message: e.message });
    }
  }

}

export default handler