import Link from 'next/link';
import style from "../styles/navbar.module.css";

interface Item {
    href: string;
    label: string;
}

interface ColumnListProps {
    items: Item[];
    n: number;
}


export const ListColumns = ({ items, n }: ColumnListProps) => {
    const splitIntoColumns = (arr: Item[], n: number) => {
        const columns = [];
        for (let i = 0; i < arr.length; i += n) {
            columns.push(arr.slice(i, i + n));
        }
        return columns;
    };

    const columns = splitIntoColumns(items, n);
    return (
        <>
            {columns.map((column, colIndex) => (
                <ul key={colIndex} className="flex flex-col">
                    {column.map((item, itemIndex) => (
                        <li key={itemIndex} className="py-1">
                            <Link href={item.href} className={`px-2 ${style.linkHover}`}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </>
    )
}