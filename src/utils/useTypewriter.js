import { useState, useEffect } from 'react';

/**
 * Custom hook for typewriter effect
 * @param {string} text - The text to animate
 * @param {number} speed - Typing speed in milliseconds (default: 100)
 * @param {number} delay - Delay before starting animation in milliseconds (default: 500)
 * @returns {string} - The currently displayed text
 */
export const useTypewriter = (text, speed = 100, delay = 500) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDelayComplete, setIsDelayComplete] = useState(false);

  // Reset when text changes (e.g., language change)
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsDelayComplete(false);
  }, [text]);

  // Handle initial delay
  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIsDelayComplete(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay, text]);

  // Handle typing animation
  useEffect(() => {
    if (!isDelayComplete) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isDelayComplete]);

  return displayedText;
};

/**
 * Custom hook for typewriter effect with cursor
 * @param {string} text - The text to animate
 * @param {number} speed - Typing speed in milliseconds (default: 100)
 * @param {number} delay - Delay before starting animation in milliseconds (default: 500)
 * @param {boolean} showCursor - Whether to show blinking cursor (default: true)
 * @returns {Object} - { displayedText, isComplete }
 */
export const useTypewriterWithCursor = (text, speed = 100, delay = 500, showCursor = true) => {
  const displayedText = useTypewriter(text, speed, delay);
  const isComplete = displayedText.length === text.length;

  return { displayedText, isComplete, showCursor };
};
