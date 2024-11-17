import Link from "next/link";

export const Button=({text,link}:{text:string, link:string})=>{
    return(
        <div className="flex h-fit mt-8">
        {
            link?(
                <Link href={link} className='custom_button' type="submit">
            
                {text}
                </Link>
            ):(
                <button className="custom_button" type="submit">
                {text}
                </button>
            )
        };
        
        </div>
    );
};