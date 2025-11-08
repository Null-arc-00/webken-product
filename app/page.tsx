import CounterButton from "../components/DiceRoll.module"
export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Success or failure</h1>
      <CounterButton/>
    </main>
  );
}