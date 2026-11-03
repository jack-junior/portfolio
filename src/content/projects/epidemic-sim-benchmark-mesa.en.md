---
title: "Agent-based epidemic model: Mesa parity implementation"
summary: "For a benchmark comparing two software architectures for agent-based epidemic models (entity-component-system with Esper against object-oriented Mesa), I wrote the Mesa implementation of the spatial SIR model, with the same seven mechanisms in the same order. The initial state matches the original bit for bit; because Esper iterates in hash order, equivalence is then tested statistically, with Kolmogorov-Smirnov and Mann-Whitney tests on replicates across four configurations (all p > 0.1). The contribution also adds 20 tests and per-mechanism profiling."
category: "tools"
years: "2026"
context: "Open-source contribution, merged"
stack: ["Python", "Mesa", "pytest"]
code: "https://github.com/mlrx-potindji/epidemic-sim-benchmark"
featured: false
order: 6
---
