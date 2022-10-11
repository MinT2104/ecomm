import db from "../db/productdb.json"

const About = () => {
    // const db = db.map((data)=>data)
    console.log(Object.values(db))
    return ( 
        <h1 className="text-center font-bold text-xl">About Page</h1>
     );
}
 
export default About;