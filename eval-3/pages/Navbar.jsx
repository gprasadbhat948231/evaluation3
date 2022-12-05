import Link from 'next/link'

function Navbar({avatar})
{
    return (
        <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'#E5CCFF'}}>
            <div style={{display:'flex',justifyContent:'space-evenly',width:'300px'}}>
                <Link href='/'>G Prasad Bhat</Link>
                <Link href='Projects'>Projects</Link>
                <Link href='Education'>Education</Link>
            </div>
            <div>
                <img src={avatar} style={{width:'50px',height:'50px',borderRadius:'50%'}}/>
            </div>
        </div>
    )
}
export default Navbar;