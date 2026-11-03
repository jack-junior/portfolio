---
title: "Modèle épidémique à base d’agents : implémentation Mesa de parité"
summary: "Pour un benchmark qui compare deux architectures logicielles de modèles épidémiques à base d'agents (entité-composant-système avec Esper contre orienté objet avec Mesa), j'ai écrit l'implémentation Mesa du modèle SIR spatial, avec les mêmes sept mécanismes dans le même ordre. L'état initial est identique bit à bit à l'original ; comme Esper itère selon l'ordre d'une table de hachage, l'équivalence est ensuite testée statistiquement, par des tests de Kolmogorov-Smirnov et de Mann-Whitney sur des réplicats dans quatre configurations (tous p > 0,1). La contribution ajoute aussi 20 tests et un profilage par mécanisme."
category: "tools"
years: "2026"
context: "Contribution open source, fusionnée"
stack: ["Python", "Mesa", "pytest"]
code: "https://github.com/mlrx-potindji/epidemic-sim-benchmark"
featured: false
order: 6
---
