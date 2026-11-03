import type { Lang } from './i18n';

// Every number below comes from Komi's own work (papers, preprints, challenge dashboard).
export function figures(lang: Lang) {
  const fr = lang === 'fr';
  return {
    hiv: {
      title: fr ? 'Décès liés au sida rapportés aux personnes vivant avec le VIH, pays africains, 2024' : 'AIDS deaths relative to people living with HIV, African countries, 2024',
      rows: [
        { label: fr ? 'Hommes' : 'Men', value: 2.27, display: fr ? '2,27 %' : '2.27%', strong: true },
        { label: fr ? 'Femmes' : 'Women', value: 1.25, display: fr ? '1,25 %' : '1.25%' },
      ],
      max: 2.5,
      caption: fr
        ? 'Rapport médian. Chez les hommes il est 1,81 fois plus élevé. Sur 105 pays, la richesse nationale est corrélée à ce rapport (r = −0,70) mais n’explique que 44,5 % des écarts entre pays.'
        : 'Median ratio. It is 1.81 times higher for men. Across 105 countries, national wealth correlates with this ratio (r = −0.70) but explains only 44.5% of the differences between countries.',
      source: fr ? 'Gayi et al., en révision (BMC Public Health), données ONUSIDA et Banque mondiale' : 'Gayi et al., under review (BMC Public Health), UNAIDS and World Bank data',
    },
    togo: {
      title: fr ? 'Distance médiane au point de service le plus proche, Togo' : 'Median distance to the nearest service point, Togo',
      rows: [
        { label: fr ? 'Agence d’opérateur télécom' : 'Telecom operator agency', value: 16.2, display: fr ? '16,2 km' : '16.2 km', strong: true },
        { label: fr ? 'Point de mobile money' : 'Mobile-money service point', value: 2.0, display: fr ? '2,0 km' : '2.0 km' },
      ],
      max: 18,
      caption: fr
        ? '12 des 39 préfectures, où vit 17,9 % de la population, n’ont aucune agence télécom. Le réseau de mobile money est mieux réparti (indice de Gini 0,309 contre 0,379).'
        : '12 of the 39 prefectures, home to 17.9% of the population, have no telecom agency. The mobile-money network is more evenly spread (Gini 0.309 against 0.379).',
      source: fr ? 'Data Challenge du Togo AI Lab, Géodata Togo et RGPH-5 (2022)' : 'Togo AI Lab Data Challenge, Geodata Togo and 2022 census (RGPH-5)',
    },
    malaria: {
      title: fr ? 'Prévalence du paludisme chez les moins de 5 ans, Liberia, 2022' : 'Malaria prevalence in children under five, Liberia, 2022',
      rows: [
        { label: fr ? 'Comtés de l’intérieur' : 'Inland counties', value: 12.7, display: fr ? '12,7 %' : '12.7%', strong: true },
        { label: fr ? 'Comtés côtiers' : 'Coastal counties', value: 8.3, display: fr ? '8,3 %' : '8.3%' },
      ],
      max: 14,
      caption: fr
        ? 'Malaria Indicator Survey 2022 (n = 2 189), p = 0,001. La pauvreté du ménage et la non-utilisation des moustiquaires sont les principaux déterminants.'
        : '2022 Malaria Indicator Survey (n = 2,189), p = 0.001. Household poverty and not sleeping under a bed net were the main determinants.',
      source: 'Tugbeh et al., Malaria Journal 2026',
    },
  };
}
