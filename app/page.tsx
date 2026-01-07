import Card from "./components/Card";

export default function DashboardPage() {
  return (
    <>
    <div className="p-6">
      <h2 className="text-xl font-semibold">Hello, Antonio</h2>

      <div className="mt-6 p-4 bg-white rounded-lg shadow">
        <h1>On going courses</h1>
        <div>
          <Card/>
        </div>
      </div>

    </div>

    </>
    // done
  );
}