"use client"
import React, { useState } from 'react';
import {  AnimatePresence } from 'framer-motion';
import { leaderShip } from '@/constants';
import Image from 'next/image';
import LeaderDetail from './LeaderDetail';

const LeaderShip = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  
  const openLeaderDetail = (leader) => {
    setSelectedLeader(leader);
  };

  const closeLeaderDetail = () => {
    setSelectedLeader(null);
  };

  return (
    <section className="padding">
      <h1 className="font-palanquin font-bold text-3xl pb-6">Leadership</h1>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-8">
        {leaderShip.map((leader, id) => (
          <div
            key={id}
            className="group block pb-28 cursor-pointer"
            onClick={() => openLeaderDetail(leader)}
          >
     <Image
  width={0}
  height={0}
  src={leader.imgURL}
  alt={leader.name}
  className="aspect-square w-full h-full object-cover"
/>


            <div className="mt-4 text-xl">
              <h3 className="font-bold text-gray-900 hover:text-gray-500 ">
                {leader.name}
              </h3>
              <p className="mt-1 text-sm text-gray-700">{leader.position}</p>
            </div>
          </div>
        ))}
      </div>
      <AnimatePresence>
        {selectedLeader && (
          <LeaderDetail leader={selectedLeader} onClose={closeLeaderDetail} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default LeaderShip;
