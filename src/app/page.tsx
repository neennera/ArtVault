export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen p-8 flex-col space-y-4">
      <h1 className="text-3xl">HI</h1>
      <div className="bg-primary text-lilac">
        This text uses the primary background and lilac text color.
      </div>
      <div className="font-sans text-white bg-red-500">
        This text uses the red background and sanse text color.
      </div>
      <div className="bg-primary text-apricot font-gamja p-4 hover:bg-purple-300">
        Welcome to ArtVault 🎨
      </div>
    </main>
  );
}
