interface IparticleValue {
  title: string;
  children: React.ReactNode;
}

export default function Particle({ title, children }: IparticleValue) {
  return (
    <div className="w-full flex flex-col border-b-2 border-black pb-base mb-base">
      <h1 className="block text-head font-extrabold mb-span">{title}</h1>
      {children}
    </div>
  );
}
