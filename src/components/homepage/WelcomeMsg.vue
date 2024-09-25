<template>
    <div class="flex items-center justify-center pt-10">
      <h1 class="text-4xl font-bold text-gray-100">
        <span class="typing-animation">Welcome, Leonard</span>
      </h1>
    </div>
  </template>
  
  <style scoped>
  .typing-animation {
    display: inline-block;
    border-right: 3px solid black;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 3.5s steps(20, end), blink 0.75s step-end infinite;
  }
  
  @keyframes typing {
    from { width: 0; }
    to { width: 15ch; } /* Adjust length based on message length */
  }
  
  @keyframes blink {
    from, to { border-color: transparent; }
    50% { border-color: black; }
  }
  </style>
  