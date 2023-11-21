import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';



function ItemMenu({ item }) {
    const [isActive, setIsActive] = useState(false);

    const router = useRouter()

    useEffect(() => {
        setIsActive(router.pathname === item.path);
    }, [router.pathname, item.path]);

    return (
        <Link href={item.path} className={isActive ? ' bg-slate-200 p-2 rounded-lg ' : undefined}  >
            <div className="flex items-center space-x-2 ">
                {item.icon}
                <h2>{item.title}</h2>
            </div>
        </Link>
    )
}

export default ItemMenu