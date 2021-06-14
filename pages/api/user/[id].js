function Teste(req, res) {
    const id = req.query.id;
    console.log(req.query)
    res.status(200).json({
      id: id
    })
    // switch (method) {
    //   case 'GET':
    //     // Get data from your database
    //     res.status(200).json({ id, name: `User ${id}` })
    //     break
    //   case 'PUT':
    //     // Update or create data in your database
    //     res.status(200).json({ id, name: name || `User ${id}` })
    //     break
    //   default:
    //     res.setHeader('Allow', ['GET', 'PUT'])
    //     res.status(405).end(`Method ${method} Not Allowed`)
    // }
  }
export default Teste