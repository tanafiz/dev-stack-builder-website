import type { Icatalog } from "../type/catalogType";

interface StackProps {
    stack: Icatalog[];
    removeFromStack: (id: string) => void;
    removeAll: () => void;
}

const Stack = ({ stack, removeFromStack, removeAll, }: StackProps) => {

    return (
        <div className="h-fit w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-sm mt-30">
            <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
            <p className="mt-1 text-sm text-gray-400">{stack.length === 0 ? "No technologies selected yet" : `${stack.length} Technology Selected`}</p>

            {stack.length === 0 ? (
                <div className="mt-5 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-sm font-medium text-gray-500">Your Stack is Empty</p>
                </div>
            ) : (
                <div className="mt-5 flex flex-col gap-2">

                    {stack.map((technology) => (
                        <div key={technology.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
                            <div className="flex items-center gap-3">
                                <img src={technology.icon} alt={technology.name} className="h-8 w-8 object-contain" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{technology.name}</p>
                                    <p className="text-xs text-gray-400">{technology.category}</p>
                                </div>
                            </div>

                            <button onClick={() => removeFromStack(technology.id)} className="text-2xl font-light text-gray-400 hover:text-red-500">×</button>
                        </div>
                    ))}
                </div>
            )}

            {stack.length > 0 && (
                <button onClick={removeAll} className="mt-6 w-full rounded-lg border border-red-300 bg-white py-2 text-sm font-semibold text-red-500 hover:bg-red-50">Remove All </button>
            )}
        </div>
    );
};

export default Stack;