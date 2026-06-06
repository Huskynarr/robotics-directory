import { describe, it, expect } from 'vitest';
import { matchesSubcategoryFilter } from '../../src/data/subcategory-filters.js';

// --- Sample robot objects ---

const vacuumRobot = {
  model: 'Roomba i7',
  category: 'vacuum',
  price: '500 USD',
  weight: '3.4',
  description: 'A smart vacuum cleaner robot',
  tagsArray: ['vacuum', 'cleaning', 'smart-home'],
  ageRange: 'all',
};

const petRobot = {
  model: 'Miko 3',
  category: 'companion',
  price: '250 USD',
  weight: '2.1',
  description: 'An interactive companion robot for kids',
  tagsArray: ['companion', 'pet', 'education', 'STEM'],
  ageRange: '4-8',
};

const teenRobot = {
  model: 'RoboBuilder',
  category: 'education',
  price: '800 USD',
  weight: '5.0',
  description: 'Advanced robotics building kit',
  tagsArray: ['education', 'building', 'programming'],
  ageRange: '12-99',
};

const noTagsRobot = {
  model: 'BasicBot',
  category: 'toy',
  price: '50 USD',
  weight: '0.5',
  description: 'A simple toy robot',
};

// --- Existing operator smoke tests ---

describe('Existing operators (smoke tests)', () => {
  it('returns true when filterDef is null/undefined', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, null)).toBe(true);
    expect(matchesSubcategoryFilter(vacuumRobot, undefined)).toBe(true);
  });

  describe('numeric operators', () => {
    it('lt - matches when field value is less than threshold', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'weight', op: 'lt', value: 5 })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'weight', op: 'lt', value: 3 })).toBe(false);
    });

    it('gt - matches when field value is greater than threshold', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'weight', op: 'gt', value: 3 })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'weight', op: 'gt', value: 4 })).toBe(false);
    });

    it('range - matches when field value is within range', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'weight', op: 'range', min: 3, max: 4 })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'weight', op: 'range', min: 5, max: 10 })).toBe(false);
    });
  });

  describe('price operators', () => {
    it('price-lt - matches when price is less than threshold', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'price', op: 'price-lt', value: 600 })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'price', op: 'price-lt', value: 400 })).toBe(false);
    });

    it('price-gt - matches when price exceeds threshold', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'price', op: 'price-gt', value: 400 })).toBe(true);
    });

    it('price-range - matches when price is within range', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'price', op: 'price-range', min: 400, max: 600 })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'price', op: 'price-range', min: 600, max: 800 })).toBe(false);
    });
  });

  describe('text operators', () => {
    it('includes - case-insensitive text match', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'description', op: 'includes', value: 'vacuum' })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'description', op: 'includes', value: 'drone' })).toBe(false);
    });

    it('includes-any - matches if any term is found', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'description', op: 'includes-any', values: ['drone', 'vacuum'] })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'description', op: 'includes-any', values: ['drone', 'mower'] })).toBe(false);
    });

    it('not-includes - matches when text is absent', () => {
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'description', op: 'not-includes', value: 'drone' })).toBe(true);
      expect(matchesSubcategoryFilter(vacuumRobot, { field: 'description', op: 'not-includes', value: 'vacuum' })).toBe(false);
    });
  });

  describe('compound operators', () => {
    it('all - all child filters must match', () => {
      const filter = {
        op: 'all',
        filters: [
          { field: 'weight', op: 'lt', value: 5 },
          { field: 'description', op: 'includes', value: 'vacuum' },
        ],
      };
      expect(matchesSubcategoryFilter(vacuumRobot, filter)).toBe(true);
    });

    it('any - at least one child filter must match', () => {
      const filter = {
        op: 'any',
        filters: [
          { field: 'weight', op: 'gt', value: 100 },
          { field: 'description', op: 'includes', value: 'vacuum' },
        ],
      };
      expect(matchesSubcategoryFilter(vacuumRobot, filter)).toBe(true);
    });
  });
});

// --- Tag operators ---

describe('tags-include', () => {
  it('matches when tagsArray includes the specified tag', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'tagsArray', op: 'tags-include', value: 'vacuum',
    })).toBe(true);
  });

  it('matches case-insensitively', () => {
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'tagsArray', op: 'tags-include', value: 'STEM',
    })).toBe(true);
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'tagsArray', op: 'tags-include', value: 'stem',
    })).toBe(true);
  });

  it('does not match when tag is absent', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'tagsArray', op: 'tags-include', value: 'mop',
    })).toBe(false);
  });

  it('returns false when tagsArray is not an array', () => {
    expect(matchesSubcategoryFilter(noTagsRobot, {
      field: 'tagsArray', op: 'tags-include', value: 'vacuum',
    })).toBe(false);
  });
});

describe('tags-include-any', () => {
  it('matches when tagsArray includes any of the specified tags', () => {
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'tagsArray', op: 'tags-include-any', values: ['pet', 'vacuum'],
    })).toBe(true);
  });

  it('matches case-insensitively', () => {
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'tagsArray', op: 'tags-include-any', values: ['PET', 'COMPANION'],
    })).toBe(true);
  });

  it('does not match when none of the tags are present', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'tagsArray', op: 'tags-include-any', values: ['pet', 'companion'],
    })).toBe(false);
  });

  it('returns false when tagsArray is not an array', () => {
    expect(matchesSubcategoryFilter(noTagsRobot, {
      field: 'tagsArray', op: 'tags-include-any', values: ['pet'],
    })).toBe(false);
  });
});

describe('tags-not-include', () => {
  it('matches when tagsArray does NOT include the tag', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'tagsArray', op: 'tags-not-include', value: 'mop',
    })).toBe(true);
  });

  it('does not match when the tag IS present', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'tagsArray', op: 'tags-not-include', value: 'vacuum',
    })).toBe(false);
  });

  it('is case-insensitive', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'tagsArray', op: 'tags-not-include', value: 'VACUUM',
    })).toBe(false);
  });

  it('returns false when tagsArray is not an array', () => {
    expect(matchesSubcategoryFilter(noTagsRobot, {
      field: 'tagsArray', op: 'tags-not-include', value: 'vacuum',
    })).toBe(false);
  });
});

// --- Age-range operators ---

describe('age-min-lte', () => {
  it('matches when ageRange min <= value', () => {
    // petRobot ageRange "4-8", min=4, 4 <= 8 is true
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'ageRange', op: 'age-min-lte', value: 8,
    })).toBe(true);
  });

  it('matches at boundary (min equals value)', () => {
    // petRobot ageRange "4-8", min=4, 4 <= 4 is true
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'ageRange', op: 'age-min-lte', value: 4,
    })).toBe(true);
  });

  it('does not match when ageRange min > value', () => {
    // teenRobot ageRange "12-99", min=12, 12 <= 5 is false
    expect(matchesSubcategoryFilter(teenRobot, {
      field: 'ageRange', op: 'age-min-lte', value: 5,
    })).toBe(false);
  });

  it('handles "all" as min=0', () => {
    // vacuumRobot ageRange "all", min=0, 0 <= 3 is true
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'ageRange', op: 'age-min-lte', value: 3,
    })).toBe(true);
  });

  it('returns false when ageRange is missing or unparseable', () => {
    expect(matchesSubcategoryFilter(noTagsRobot, {
      field: 'ageRange', op: 'age-min-lte', value: 8,
    })).toBe(false);
  });
});

describe('age-min-gte', () => {
  it('matches when ageRange min >= value', () => {
    // teenRobot ageRange "12-99", min=12, 12 >= 10 is true
    expect(matchesSubcategoryFilter(teenRobot, {
      field: 'ageRange', op: 'age-min-gte', value: 10,
    })).toBe(true);
  });

  it('matches at boundary (min equals value)', () => {
    expect(matchesSubcategoryFilter(teenRobot, {
      field: 'ageRange', op: 'age-min-gte', value: 12,
    })).toBe(true);
  });

  it('does not match when ageRange min < value', () => {
    // petRobot ageRange "4-8", min=4, 4 >= 8 is false
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'ageRange', op: 'age-min-gte', value: 8,
    })).toBe(false);
  });

  it('handles "all" as min=0', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'ageRange', op: 'age-min-gte', value: 0,
    })).toBe(true);
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'ageRange', op: 'age-min-gte', value: 1,
    })).toBe(false);
  });
});

describe('age-max-lte', () => {
  it('matches when ageRange max <= value', () => {
    // petRobot ageRange "4-8", max=8, 8 <= 14 is true
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'ageRange', op: 'age-max-lte', value: 14,
    })).toBe(true);
  });

  it('matches at boundary (max equals value)', () => {
    expect(matchesSubcategoryFilter(petRobot, {
      field: 'ageRange', op: 'age-max-lte', value: 8,
    })).toBe(true);
  });

  it('does not match when ageRange max > value', () => {
    // teenRobot ageRange "12-99", max=99, 99 <= 14 is false
    expect(matchesSubcategoryFilter(teenRobot, {
      field: 'ageRange', op: 'age-max-lte', value: 14,
    })).toBe(false);
  });

  it('handles "all" as max=99', () => {
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'ageRange', op: 'age-max-lte', value: 99,
    })).toBe(true);
    expect(matchesSubcategoryFilter(vacuumRobot, {
      field: 'ageRange', op: 'age-max-lte', value: 50,
    })).toBe(false);
  });
});

// --- Compound filters with tag operators ---

describe('Compound filters with tag and age operators', () => {
  it('all - combines tag and age filters', () => {
    const filter = {
      op: 'all',
      filters: [
        { field: 'tagsArray', op: 'tags-include', value: 'education' },
        { field: 'ageRange', op: 'age-min-lte', value: 8 },
      ],
    };
    // petRobot has 'education' tag and ageRange "4-8" (min=4 <= 8)
    expect(matchesSubcategoryFilter(petRobot, filter)).toBe(true);
    // teenRobot has 'education' tag but ageRange "12-99" (min=12 <= 8 is false)
    expect(matchesSubcategoryFilter(teenRobot, filter)).toBe(false);
  });

  it('any - matches if either tag or age filter matches', () => {
    const filter = {
      op: 'any',
      filters: [
        { field: 'tagsArray', op: 'tags-include', value: 'vacuum' },
        { field: 'ageRange', op: 'age-min-gte', value: 12 },
      ],
    };
    // vacuumRobot has 'vacuum' tag
    expect(matchesSubcategoryFilter(vacuumRobot, filter)).toBe(true);
    // teenRobot ageRange "12-99" (min=12 >= 12)
    expect(matchesSubcategoryFilter(teenRobot, filter)).toBe(true);
    // petRobot: no 'vacuum' tag, ageRange "4-8" (min=4 >= 12 is false)
    expect(matchesSubcategoryFilter(petRobot, filter)).toBe(false);
  });

  it('nested compound with tags-not-include', () => {
    const filter = {
      op: 'all',
      filters: [
        { field: 'tagsArray', op: 'tags-not-include', value: 'vacuum' },
        {
          op: 'any',
          filters: [
            { field: 'tagsArray', op: 'tags-include-any', values: ['pet', 'building'] },
          ],
        },
      ],
    };
    // petRobot: does NOT have 'vacuum', has 'pet'
    expect(matchesSubcategoryFilter(petRobot, filter)).toBe(true);
    // teenRobot: does NOT have 'vacuum', has 'building'
    expect(matchesSubcategoryFilter(teenRobot, filter)).toBe(true);
    // vacuumRobot: HAS 'vacuum', fails tags-not-include
    expect(matchesSubcategoryFilter(vacuumRobot, filter)).toBe(false);
  });

  it('combines tag, age, and text operators', () => {
    const filter = {
      op: 'all',
      filters: [
        { field: 'tagsArray', op: 'tags-include', value: 'companion' },
        { field: 'ageRange', op: 'age-max-lte', value: 10 },
        { field: 'description', op: 'includes', value: 'kids' },
      ],
    };
    // petRobot: has 'companion', ageRange "4-8" (max=8 <= 10), description has 'kids'
    expect(matchesSubcategoryFilter(petRobot, filter)).toBe(true);
    // vacuumRobot: no 'companion' tag
    expect(matchesSubcategoryFilter(vacuumRobot, filter)).toBe(false);
  });
});
