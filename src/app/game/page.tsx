'use client';

import dynamic from 'next/dynamic';

const Game = dynamic(() => import('@/components/game/Game'), { ssr: false });

export default function GamePage() {
  return (
    <div className="h-screen w-screen">
      <Game />
    </div>
  );
}
