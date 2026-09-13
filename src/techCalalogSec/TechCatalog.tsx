import { use } from "react";
import type { Icatalog } from "../type/catalogType";
import Card from "./Card";

interface TechCatalogProps {
    catalogPromise: Promise<Icatalog[]>;
    toggleStack: (technology: Icatalog) => void;
}

const TechCatalog = ({ catalogPromise, toggleStack }: TechCatalogProps) => {
    const catalog = use(catalogPromise);
    return (
        <div>
            <h2 className="font-bold text-[36px]"> Explore the<span className="text-[#EC4899]">Technologies</span></h2>
            <p className="text-[#64748B] text-[17px] mb-10">Pick one technology per category to build your ideal stack.</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {catalog.map((item) => (
                    <Card key={item.id} catalog={item} toggleStack={toggleStack} />))}
            </div>
        </div>
    );
};

export default TechCatalog;