export const CATEGORIES = [
  {
    id: 'humanoid',
    icon: 'fa-person',
    color: '#2563eb',
    subcategories: [
      {
        id: 'humanoid-personal',
        i18nKey: 'sub.humanoid.personal',
        detailKey: 'sub.humanoid.personal.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['consumer', 'personal-assistant'],
        },
      },
      {
        id: 'humanoid-research',
        i18nKey: 'sub.humanoid.research',
        detailKey: 'sub.humanoid.research.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['research', 'dev-platform'],
        },
      },
      {
        id: 'humanoid-industrial',
        i18nKey: 'sub.humanoid.industrial',
        detailKey: 'sub.humanoid.industrial.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['industrial', 'commercial', 'warehouse', 'programmable', 'ai-powered', 'cellular'],
        },
      },
      {
        id: 'humanoid-prototype',
        i18nKey: 'sub.humanoid.prototype',
        detailKey: 'sub.humanoid.prototype.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['prototype', 'concept'],
        },
      },
    ],
  },
  {
    id: 'quadruped',
    icon: 'fa-dog',
    color: '#d97706',
    subcategories: [
      {
        id: 'quadruped-pet',
        i18nKey: 'sub.quadruped.pet',
        detailKey: 'sub.quadruped.pet.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['pet', 'companion', 'consumer', 'educational'],
        },
      },
      {
        id: 'quadruped-research',
        i18nKey: 'sub.quadruped.research',
        detailKey: 'sub.quadruped.research.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['research', 'dev-platform'],
        },
      },
      {
        id: 'quadruped-industrial',
        i18nKey: 'sub.quadruped.industrial',
        detailKey: 'sub.quadruped.industrial.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['industrial', 'inspection', 'security', 'all-terrain'],
        },
      },
      {
        id: 'quadruped-entertainment',
        i18nKey: 'sub.quadruped.entertainment',
        detailKey: 'sub.quadruped.entertainment.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['toy', 'entertainment'],
        },
      },
    ],
  },
  {
    id: 'companion',
    icon: 'fa-heart',
    color: '#db2777',
    subcategories: [
      {
        id: 'companion-assistant',
        i18nKey: 'sub.companion.assistant',
        detailKey: 'sub.companion.assistant.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['assistant', 'telepresence'],
        },
      },
      {
        id: 'companion-therapeutic',
        i18nKey: 'sub.companion.therapeutic',
        detailKey: 'sub.companion.therapeutic.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['therapeutic', 'emotional-support'],
        },
      },
      {
        id: 'companion-toy',
        i18nKey: 'sub.companion.toy',
        detailKey: 'sub.companion.toy.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['toy', 'entertainment'],
        },
      },
      {
        id: 'companion-social',
        i18nKey: 'sub.companion.social',
        detailKey: 'sub.companion.social.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['social', 'companion'],
        },
      },
    ],
  },
  {
    id: 'cleaning',
    icon: 'fa-broom',
    color: '#0d9488',
    subcategories: [
      {
        id: 'cleaning-vacuum',
        i18nKey: 'sub.cleaning.vacuum',
        detailKey: 'sub.cleaning.vacuum.detail',
        filter: {
          op: 'all',
          filters: [
            { field: 'tagsArray', op: 'tags-include', value: 'vacuum' },
            { field: 'tagsArray', op: 'tags-not-include', value: 'mop' },
          ],
        },
      },
      {
        id: 'cleaning-vacuummop',
        i18nKey: 'sub.cleaning.vacuummop',
        detailKey: 'sub.cleaning.vacuummop.detail',
        filter: {
          op: 'all',
          filters: [
            { field: 'tagsArray', op: 'tags-include', value: 'vacuum' },
            { field: 'tagsArray', op: 'tags-include', value: 'mop' },
          ],
        },
      },
      {
        id: 'cleaning-mop',
        i18nKey: 'sub.cleaning.mop',
        detailKey: 'sub.cleaning.mop.detail',
        filter: {
          op: 'all',
          filters: [
            { field: 'tagsArray', op: 'tags-include', value: 'mop' },
            { field: 'tagsArray', op: 'tags-not-include', value: 'vacuum' },
          ],
        },
      },
      {
        id: 'cleaning-window',
        i18nKey: 'sub.cleaning.window',
        detailKey: 'sub.cleaning.window.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include',
          value: 'window-clean',
        },
      },
      {
        id: 'cleaning-specialty',
        i18nKey: 'sub.cleaning.specialty',
        detailKey: 'sub.cleaning.specialty.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['uv-clean', 'air-purify'],
        },
      },
    ],
  },
  {
    id: 'outdoor',
    icon: 'fa-tree',
    color: '#059669',
    subcategories: [
      {
        id: 'outdoor-lawn',
        i18nKey: 'sub.outdoor.lawn',
        detailKey: 'sub.outdoor.lawn.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include',
          value: 'lawn-mow',
        },
      },
      {
        id: 'outdoor-pool',
        i18nKey: 'sub.outdoor.pool',
        detailKey: 'sub.outdoor.pool.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include',
          value: 'pool-clean',
        },
      },
      {
        id: 'outdoor-garden',
        i18nKey: 'sub.outdoor.garden',
        detailKey: 'sub.outdoor.garden.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['garden', 'snow-removal', 'autonomous-nav'],
        },
      },
    ],
  },
  {
    id: 'educational',
    icon: 'fa-graduation-cap',
    color: '#10b981',
    subcategories: [
      {
        id: 'educational-young',
        i18nKey: 'sub.educational.young',
        detailKey: 'sub.educational.young.detail',
        filter: {
          field: 'ageRange',
          op: 'age-min-lte',
          value: 8,
        },
      },
      {
        id: 'educational-intermediate',
        i18nKey: 'sub.educational.intermediate',
        detailKey: 'sub.educational.intermediate.detail',
        filter: {
          op: 'all',
          filters: [
            { field: 'ageRange', op: 'age-min-gte', value: 8 },
            { field: 'ageRange', op: 'age-max-lte', value: 14 },
          ],
        },
      },
      {
        id: 'educational-advanced',
        i18nKey: 'sub.educational.advanced',
        detailKey: 'sub.educational.advanced.detail',
        filter: {
          field: 'ageRange',
          op: 'age-min-gte',
          value: 12,
        },
      },
    ],
  },
  {
    id: 'smarthome',
    icon: 'fa-house-signal',
    color: '#ea580c',
    subcategories: [
      {
        id: 'smarthome-kitchen',
        i18nKey: 'sub.smarthome.kitchen',
        detailKey: 'sub.smarthome.kitchen.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['kitchen', 'cooking'],
        },
      },
      {
        id: 'smarthome-security',
        i18nKey: 'sub.smarthome.security',
        detailKey: 'sub.smarthome.security.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['security', 'surveillance', 'monitoring'],
        },
      },
      {
        id: 'smarthome-assistant',
        i18nKey: 'sub.smarthome.assistant',
        detailKey: 'sub.smarthome.assistant.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['home-assistant', 'smart-home'],
        },
      },
      {
        id: 'smarthome-utility',
        i18nKey: 'sub.smarthome.utility',
        detailKey: 'sub.smarthome.utility.detail',
        filter: {
          field: 'tagsArray',
          op: 'tags-include-any',
          values: ['delivery', 'laundry', 'projector'],
        },
      },
    ],
  },
];

export const CATEGORY_LABELS = {
  humanoid: 'Humanoid Robot',
  quadruped: 'Quadruped Robot',
  companion: 'Companion Robot',
  cleaning: 'Cleaning Robot',
  outdoor: 'Outdoor Robot',
  educational: 'Educational Robot',
  smarthome: 'Smart Home Robot',
};

export const CATEGORY_COLORS = Object.fromEntries(CATEGORIES.map(c => [c.id, c.color]));

/**
 * Cross-category use-case filters.
 * Each use case defines which robots match via category inclusion
 * and/or tag-based filters using the subcategory filter engine.
 */
export const USE_CASES = [
  {
    id: 'home',
    i18nKey: 'usecase.home',
    icon: 'fa-house-chimney',
    color: '#ea580c',
    filter: {
      op: 'any',
      filters: [
        { field: 'category', op: 'includes', value: 'cleaning' },
        { field: 'category', op: 'includes', value: 'outdoor' },
        { field: 'category', op: 'includes', value: 'smarthome' },
        {
          op: 'all',
          filters: [
            { field: 'category', op: 'includes', value: 'companion' },
            {
              field: 'tagsArray',
              op: 'tags-include-any',
              values: ['therapeutic', 'emotional-support', 'social', 'companion'],
            },
          ],
        },
      ],
    },
  },
  {
    id: 'education',
    i18nKey: 'usecase.education',
    icon: 'fa-lightbulb',
    color: '#10b981',
    filter: {
      op: 'any',
      filters: [
        { field: 'category', op: 'includes', value: 'educational' },
        {
          op: 'all',
          filters: [
            { field: 'category', op: 'includes', value: 'companion' },
            {
              field: 'tagsArray',
              op: 'tags-include-any',
              values: ['toy', 'entertainment'],
            },
          ],
        },
        {
          op: 'all',
          filters: [
            { field: 'category', op: 'includes', value: 'quadruped' },
            {
              field: 'tagsArray',
              op: 'tags-include-any',
              values: ['pet', 'companion'],
            },
            { field: 'price', op: 'price-lt', value: 5000 },
          ],
        },
      ],
    },
  },
  {
    id: 'industry',
    i18nKey: 'usecase.industry',
    icon: 'fa-industry',
    color: '#2563eb',
    filter: {
      op: 'any',
      filters: [
        {
          op: 'all',
          filters: [
            { field: 'category', op: 'includes', value: 'humanoid' },
            {
              field: 'tagsArray',
              op: 'tags-include-any',
              values: ['industrial', 'commercial', 'warehouse'],
            },
          ],
        },
        {
          op: 'all',
          filters: [
            { field: 'category', op: 'includes', value: 'quadruped' },
            {
              field: 'tagsArray',
              op: 'tags-include-any',
              values: ['industrial', 'inspection'],
            },
          ],
        },
        {
          op: 'all',
          filters: [
            { field: 'category', op: 'includes', value: 'smarthome' },
            {
              field: 'tagsArray',
              op: 'tags-include-any',
              values: ['security', 'surveillance', 'monitoring'],
            },
          ],
        },
      ],
    },
  },
];
