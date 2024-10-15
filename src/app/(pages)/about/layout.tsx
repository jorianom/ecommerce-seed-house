

export default function PublicLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <div>
            <h1>Layout About</h1>
            {children}
        </div>
    );
}
