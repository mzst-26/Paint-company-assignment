exports.handler = async (event) => {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'paint-company'
    });
  
    if (event.httpMethod === 'POST') {
      try {
        const message = JSON.parse(event.body).message;
  
        const [rows, fields] = await connection.execute(
          `INSERT INTO Messages (Message) VALUES (?)`,
          [message]
        );
  
        return {
          statusCode: 200,
          body: JSON.stringify({ message: 'Message sent successfully!' })
        };
      } catch (err) {
        return {
          statusCode: 400,
          body: JSON.stringify({ message: `Error: ${err}` })
        };
      }
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Empty request' })
      };
    }
  
    await connection.end();
  };
  