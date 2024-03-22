import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    if (!isRunning) {
      // Start the timer
      setIsRunning(true);
    } else {
      // Pause the timer and add note
      setIsRunning(false);
      addNote();
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    setProjectName('');
  };

  const addNote = () => {
    if (projectName.trim() !== '') {
      setNotes([...notes, { projectName, time: formatTime(time), timestamp: Date.now() }]);
      setProjectName('');
    }
  };

  return (
    <div className="container mx-auto mt-8 text-center">
      <div className="flex justify-center items-center mb-4">
        <input
          type="text"
          placeholder="Enter project name"
          className="border border-gray-400 rounded-md p-2 mr-2"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <div className="text-4xl  mr-2">{formatTime(time)}</div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleTimer}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <div className='flex justify-center'>
        {notes.length > 0 && (
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2">Notes</h2>
            {notes.map((note, index) => (
              <div key={index} className="mb-2">
                <span className="font-bold">{note.projectName}: </span>
                <span>{note.time}</span>
                {note.timestamp && (
                  <span className="ml-2 text-gray-500">(Paused at: {new Date(note.timestamp).toLocaleTimeString()})</span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {notes.length === 0 && <p>No project available.</p>}
    </div>
  );
};

export default Stopwatch;
