import type { Icatalog } from "../type/catalogType";

interface CardProps {
    catalog: Icatalog;
    toggleStack: (technology: Icatalog) => void;
}

const Card = ({ catalog, toggleStack }: CardProps) => {
    return (
        <div className="w-full rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between">
                <img src={catalog.icon} alt={catalog.name} className="h-10 w-10 object-contain" />
                <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs text-green-600">{catalog.badge}</span>
            </div>
            <h2 className="mt-4 text-xl font-bold text-gray-900">{catalog.name}</h2>


            <p className="mt-2 text-sm leading-5 text-gray-500">{catalog.description}</p>

            <div className="mt-5 flex items-center justify-between text-xs"><span className="rounded bg-gray-100 px-2 py-1 text-gray-600">{catalog.category}</span>
                <span className="text-gray-500">{catalog.difficulty}</span>
                <span className="font-semibold text-gray-700">⭐ {catalog.rating}</span>
            </div>

            <button onClick={() => toggleStack(catalog)} className="mt-9 w-full rounded-lg py-2 text-sm font-semibold text-white bg-black cursor-pointer" style={{ backgroundImage: "var(--brand-gradient)", }}>Add to Stack
            </button>

        </div>
    );
};

export default Card;