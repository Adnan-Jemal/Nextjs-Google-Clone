import SearchHeader from "@/components/SearchHeader";
import "./../globals.css";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
};

export default layout;
