import React, { useState } from 'react';
import { VoiceButton } from '@/components/VoiceButton';
import { RandomButton } from '@/components/RandomButton';
import { VibeButton } from '@/components/VibeButton';
import { RefreshButton } from '@/components/RefreshButton';
import { ActionButtons } from '@/components/ActionButtons';

const voices = [
  { name: 'Alloy', hasStar: false },
  { name: 'Ash', hasStar: true },
  { name: 'Ballad', hasStar: true },
  { name: 'Coral', hasStar: true },
  { name: 'Echo', hasStar: false },
  { name: 'Fable', hasStar: false },
  { name: 'Onyx', hasStar: false },
  { name: 'Nova', hasStar: false },
  { name: 'Sage', hasStar: true },
  { name: 'Shimmer', hasStar: false },
  { name: 'Verse', hasStar: true },
];

const vibes = [
  'Sports Coach',
  'Smooth Jazz DJ',
  'Medieval Knight',
  'Patient Teacher',
  'Professional',
];

const Index = () => {
  const [selectedVoice, setSelectedVoice] = useState('Coral');
  const [selectedVibe, setSelectedVibe] = useState('Sports Coach');
  const [vibeText, setVibeText] = useState(`Voice Affect: Energetic and animated; dynamic with variations in pitch and tone.

Tone: Excited and enthusiastic, conveying an upbeat and thrilling atmosphere. 

Pacing: Rapid delivery when describing the game or the key moments (e.g., "an overtime thriller," "pull off an unbelievable win") to convey the intensity and build excitement.

Slightly slower during dramatic pauses to let key points sink in.

Emotion: Intensely focused, and excited. Giving off positive energy.

Personality: Relatable and engaging. 

Pauses: Short, purposeful pauses after key moments in the game.`);

  const [scriptText, setScriptText] = useState(`What's up, sports fans?! Welcome to The Final Whistle! I'm your host, and today, we're breaking down last night's epic overtime thriller!

The crowd was electric, the players fired up, and the Artica Aces pulled off a comeback for the ages! We'll dive into the key plays and standout moments, and what this means for the rest of the season.

This one's packed with heart-pounding action, so grab your snacks, and let's get into it!`);

  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      <div className="flex flex-col gap-x-3 min-h-screen px-5 pt-6 pb-32 md:pb-24">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">OpenAI.fm</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                An interactive demo for developers to try the new text-to-speech model in the OpenAI API.
              </span>
              <button className="text-blue-600 hover:text-blue-700">
                START BUILDING →
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col gap-x-3 w-full max-w-7xl mx-auto">
          <div className="flex flex-row">
            <div className="flex flex-1 flex-col shrink-0 mb-10">
              {/* Voice Section */}
              <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
                <div className="flex uppercase py-1 text-gray-500 text-sm font-medium">VOICE</div>
                <div className="flex flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <div className="flex flex-1 flex-col pt-3 rounded-md">
                <div className="grid grid-cols-12 gap-3">
                  {voices.map((voice) => (
                    <div key={voice.name} className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1 relative">
                      <VoiceButton
                        name={voice.name}
                        isSelected={selectedVoice === voice.name}
                        hasStar={voice.hasStar}
                        onClick={() => setSelectedVoice(voice.name)}
                      />
                    </div>
                  ))}
                  <div className="col-span-4 sm:col-span-3 md:col-span-2 xl:col-span-1">
                    <RandomButton />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-3">
            {/* Vibe Section */}
            <div className="flex flex-1 flex-col shrink-0 mb-10">
              <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
                <div className="flex uppercase py-1 text-gray-500 text-sm font-medium">VIBE</div>
                <div className="flex flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <div className="flex flex-1 flex-col pt-3 rounded-md">
                <div className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {vibes.map((vibe) => (
                      <VibeButton
                        key={vibe}
                        name={vibe}
                        isSelected={selectedVibe === vibe}
                        onClick={() => setSelectedVibe(vibe)}
                      />
                    ))}
                    <RefreshButton />
                  </div>
                  
                  <textarea
                    value={vibeText}
                    onChange={(e) => setVibeText(e.target.value)}
                    rows={8}
                    maxLength={999}
                    className="w-full resize-none outline-none focus:outline-none bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-[16px] md:text-[14px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Script Section */}
            <div className="flex flex-1 flex-col shrink-0 mb-10">
              <div className="flex flex-row justify-between -mb-[1px] relative items-center gap-2">
                <div className="flex uppercase py-1 text-gray-500 text-sm font-medium">SCRIPT</div>
                <div className="flex flex-1 h-[1px] bg-gray-200"></div>
              </div>
              
              <div className="flex flex-1 flex-col pt-3 rounded-md">
                <div className="relative flex flex-col h-full w-full">
                  <textarea
                    value={scriptText}
                    onChange={(e) => setScriptText(e.target.value)}
                    rows={8}
                    maxLength={999}
                    className="w-full h-full min-h-[220px] resize-none outline-none focus:outline-none bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-[16px] md:text-[14px] focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <span className="absolute bottom-3 right-4 z-10 opacity-30 hidden sm:block text-sm">
                    {scriptText.length}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ActionButtons />
        </main>
      </div>
    </div>
  );
};

export default Index;