# React Router useLocation().state undefined Bug

This repository demonstrates a common issue encountered when using the `useLocation` hook in `react-router-dom` to access state passed during navigation.  The problem arises when `location.state` unexpectedly returns `undefined` despite correctly setting the state during the navigation process.

## Problem
The `bug.js` file shows how `location.state` returns `undefined` even when navigating with the state object.

## Solution
The `bugSolution.js` file provides a solution to reliably handle the state, ensuring the application gracefully handles cases where state might be absent.