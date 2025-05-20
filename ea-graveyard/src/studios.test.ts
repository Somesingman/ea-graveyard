import { describe, expect, test } from 'vitest';
import { RawStudioInfo, Status } from './types/Studio';

import rawStudioData from './studios.json';

describe("studios.json", () => {
  test('has all nonempty fields are nonempty', () => {
    rawStudioData.forEach((studio: RawStudioInfo) => {
      try {
        expect(studio.name).not.toBeNull();
        expect(studio.status).not.toBeNull();
        expect(studio.ownedBy).not.toBeUndefined();
        expect(studio.acquiredBy).not.toBeUndefined();
        expect(studio.description).not.toBeNull();
        expect(studio.dateFounded).not.toBeNull();
        expect(studio.dateAcquired).not.toBeUndefined();
        expect(studio.dateClosed).not.toBeUndefined();
        expect(studio.link).not.toBeNull();
        // expect(studio.logo).not.toBeNull();
        expect(studio.searchTags.length).toBeGreaterThan(0);
      } catch {
        throw new Error(`${studio.name} has empty fields that should be nonempty.`);
      }
    });
  });

  test('only uses allowed statuses', () => {
    rawStudioData.forEach((studio: RawStudioInfo) => {
      expect(Object.values(Status).includes(studio.status as Status), `${studio.name} is not using an allowed status.`).toBe(true);
    });
  });

  describe('Dates', () => {
    const currentDate = new Date(Date.now());

    test('Dates are valid', () => {
      const thisYear = currentDate.getFullYear();
      rawStudioData.forEach((studio: RawStudioInfo) => {
        try {
          const dateFounded = new Date(studio.dateFounded);
          const dateAcquired = studio.dateAcquired ? new Date(studio.dateAcquired) : null;
          const dateClosed = studio.dateClosed ? new Date(studio.dateClosed) : null;
          
          // Also check that dates are not in the future
          expect((dateFounded.getFullYear()) <= thisYear);
          if (dateClosed) {
            expect((dateClosed.getFullYear()) <= thisYear);
          }
          if (dateAcquired) {
            expect((dateAcquired.getFullYear()) <= thisYear);
          }
        } catch {
          throw new Error(`${studio.name} dates are invalid. Either badly formatted or in the future.`);
        }
      });
    });
    
    test('dateClosed is after dateFounded and dateAcquired (when applicable)', () => {
      rawStudioData.forEach((studio: RawStudioInfo) => {
        if (studio.dateClosed) {
          try {
            const dateFounded = new Date(studio.dateFounded);
            const dateAcquired = studio.dateAcquired ? new Date(studio.dateAcquired) : null;
            const dateClosed = new Date(studio.dateClosed);
            
            expect(dateFounded < dateClosed);
            if (dateAcquired) {
              expect(dateAcquired < dateClosed);
            }
          } catch {
            throw new Error(`${studio.name} was either founded or acquired before they were closed!`);
          }
        }
        return;
      });
    });
  });
});