"use client";

export default function ChatDropdown() {
  return (
    <div className="absolute right-0 mt-3 w-64 rounded-xl bg-white shadow-lg border p-4 z-50">
      <h6 className="text-sm font-semibold mb-3">Chats</h6>

      <ul className="space-y-2">
        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <img src="/img/profile.png" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-gray-500">Hey, how are you?</p>
          </div>
        </li>

        <li className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
          <img src="/img/profile.png" className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-medium">Emma</p>
            <p className="text-xs text-gray-500">Let’s catch up</p>
          </div>
        </li>
      </ul>
    </div>
  );
}
