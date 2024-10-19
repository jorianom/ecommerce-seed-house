
export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <h1>Layout DescriptionProductPage</h1>
            {children}
        </div>
    );
}
