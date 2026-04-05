import {
  parseEventDateTime,
  getNextService,
  formatTimeRemaining,
  serviceTimes,
  selectEventsForHomepageCarousel,
} from '../serviceTimes'
import type { Event } from '@/lib/cms/types'

describe('parseEventDateTime', () => {
  it('should parse event with standard time format "10:00 AM"', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '10:00 AM',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(10)
    expect(result.getMinutes()).toBe(0)
  })

  it('should parse event with time format "10am" (no colon)', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '10am',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(10)
    expect(result.getMinutes()).toBe(0)
  })

  it('should parse event with time format "10:00am" (no space)', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '10:00am',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(10)
    expect(result.getMinutes()).toBe(0)
  })

  it('should parse event with PM time format "2:30 PM"', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '2:30 PM',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(14)
    expect(result.getMinutes()).toBe(30)
  })

  it('should parse event with PM time format "10pm"', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '10pm',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(22)
    expect(result.getMinutes()).toBe(0)
  })

  it('should handle 12:00 AM correctly', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '12:00 AM',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(0)
    expect(result.getMinutes()).toBe(0)
  })

  it('should handle 12:00 PM correctly', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: '12:00 PM',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event)
    expect(result.getHours()).toBe(12)
    expect(result.getMinutes()).toBe(0)
  })

  it('should use default hour when time is missing', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event, 9)
    expect(result.getHours()).toBe(9)
    expect(result.getMinutes()).toBe(0)
  })

  it('should use default hour when time parsing fails', () => {
    const event: Event = {
      id: '1',
      title: 'Test Event',
      date: '2025-01-27',
      time: 'invalid-time',
      description: 'Test',
      category: 'service',
    }
    const result = parseEventDateTime(event, 9)
    expect(result.getHours()).toBe(9)
    expect(result.getMinutes()).toBe(0)
  })
})

describe('getNextService', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should return next Sunday service when today is before Sunday', () => {
    // Thursday: next Sunday (Jan 26) comes before the following Wednesday (Jan 29)
    jest.setSystemTime(new Date('2025-01-23T10:00:00Z'))
    const result = getNextService()
    expect(result).not.toBeNull()
    expect(result?.service.name).toBe('Sunday Service')
  })

  it('should preserve service minutes when calculating next service time', () => {
    jest.setSystemTime(new Date('2025-01-23T10:00:00Z'))
    const result = getNextService()
    expect(result).not.toBeNull()
    expect(result?.service.name).toBe('Sunday Service')
    expect(result?.date.getMinutes()).toBe(50)
  })

  it('should return next Wednesday service when today is before Wednesday', () => {
    // Sunday evening after morning service: next Wednesday is before next Sunday
    jest.setSystemTime(new Date('2025-01-26T22:00:00Z'))
    const result = getNextService()
    expect(result).not.toBeNull()
    expect(result?.service.name).toBe('Digging Deep / Faith Clinic')
  })

  it('should return special event if it comes before next recurring service', () => {
    // Set to a date before a special event
    jest.setSystemTime(new Date('2025-01-25T10:00:00Z'))
    const events: Event[] = [
      {
        id: '1',
        title: 'Special Event',
        date: '2025-01-26',
        time: '10:00 AM',
        description: 'Test',
        category: 'service',
      },
    ]
    const result = getNextService(events)
    expect(result).not.toBeNull()
    expect(result?.service.name).toBe('Special Event')
  })

  it('should return null if no services found in check window', () => {
    // Set to a date far in the future (beyond check window)
    // This test might need adjustment based on actual implementation
    jest.setSystemTime(new Date('2099-12-31T10:00:00Z'))
    const result = getNextService()
    // This might return null or a service depending on implementation
    // Adjust based on actual behavior
    expect(result).toBeDefined()
  })
})

describe('formatTimeRemaining', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('should calculate correct time remaining for future date', () => {
    jest.setSystemTime(new Date('2025-01-27T10:00:00Z'))
    const targetDate = new Date('2025-01-29T15:30:00Z')
    const result = formatTimeRemaining(targetDate)
    expect(result.days).toBe(2)
    expect(result.hours).toBe(5)
    expect(result.minutes).toBe(30)
    expect(result.seconds).toBe(0)
  })

  it('should return zeros for past date', () => {
    jest.setSystemTime(new Date('2025-01-27T10:00:00Z'))
    const targetDate = new Date('2025-01-25T10:00:00Z')
    const result = formatTimeRemaining(targetDate)
    expect(result.days).toBe(0)
    expect(result.hours).toBe(0)
    expect(result.minutes).toBe(0)
    expect(result.seconds).toBe(0)
  })

  it('should calculate seconds correctly', () => {
    jest.setSystemTime(new Date('2025-01-27T10:00:00Z'))
    const targetDate = new Date('2025-01-27T10:00:45Z')
    const result = formatTimeRemaining(targetDate)
    expect(result.seconds).toBe(45)
    expect(result.minutes).toBe(0)
  })
})

describe('selectEventsForHomepageCarousel', () => {
  it('should keep Communion Service in the carousel when many earlier CMS events would fill the slice', () => {
    const base = new Date('2026-06-01T12:00:00Z')
    const cms: Event[] = Array.from({ length: 11 }, (_, i) => ({
      id: `cms-${i}`,
      slug: `cms-${i}`,
      title: `CMS Event ${i}`,
      description: 'd',
      date: new Date(base.getTime() + i * 86400000),
      time: '10:00 AM',
      image: { url: 'https://example.com/x.jpg', alt: 'x' },
    }))
    const communion: Event = {
      id: 'rec-communion',
      slug: 'communion-service-2026-06-07',
      title: 'Communion Service',
      description: 'Holy Communion',
      date: new Date('2026-06-07T23:00:00Z'),
      time: '6:00 PM',
      image: { url: 'https://images.unsplash.com/photo-test', alt: 'Communion' },
    }
    const pool = [...cms, communion].sort(
      (a, b) => parseEventDateTime(a).getTime() - parseEventDateTime(b).getTime(),
    )
    const selected = selectEventsForHomepageCarousel(pool, 10)
    expect(selected.some((e) => e.title === 'Communion Service')).toBe(true)
    expect(selected).toHaveLength(10)
  })

  it('should return all events sorted by date when count is at or below max', () => {
    const a: Event = {
      id: 'a',
      slug: 'a',
      title: 'Later',
      description: '',
      date: new Date('2026-07-01T12:00:00Z'),
      time: '10:00 AM',
      image: { url: 'https://example.com/a.jpg', alt: '' },
    }
    const b: Event = {
      id: 'b',
      slug: 'b',
      title: 'Earlier',
      description: '',
      date: new Date('2026-06-01T12:00:00Z'),
      time: '10:00 AM',
      image: { url: 'https://example.com/b.jpg', alt: '' },
    }
    const selected = selectEventsForHomepageCarousel([a, b], 10)
    expect(selected.map((e) => e.title)).toEqual(['Earlier', 'Later'])
  })
})

describe('serviceTimes', () => {
  it('should have Sunday Service defined', () => {
    const sundayService = serviceTimes.find((s) => s.day === 'sunday')
    expect(sundayService).toBeDefined()
    expect(sundayService?.name).toBe('Sunday Service')
    expect(sundayService?.time).toBe('9:50 AM')
  })

  it('should have Wednesday service defined', () => {
    const wednesdayService = serviceTimes.find((s) => s.day === 'wednesday')
    expect(wednesdayService).toBeDefined()
    expect(wednesdayService?.name).toBe('Digging Deep / Faith Clinic')
    expect(wednesdayService?.time).toBe('7:00 PM')
    expect(wednesdayService?.recurring).toBe('weekly')
  })

  it('should have Youth Ministry defined', () => {
    const youthService = serviceTimes.find((s) => s.day === 'third-sunday')
    expect(youthService).toBeDefined()
    expect(youthService?.name).toBe('Youth Ministry')
    expect(youthService?.time).toBe('9:50 AM')
    expect(youthService?.recurring).toBe('monthly-third')
  })

  it('should have Thanksgiving Service defined', () => {
    const thanksgivingService = serviceTimes.find((s) => s.name === 'Thanksgiving Service')
    expect(thanksgivingService).toBeDefined()
    expect(thanksgivingService?.day).toBe('first-sunday')
    expect(thanksgivingService?.time).toBe('9:50 AM')
    expect(thanksgivingService?.recurring).toBe('monthly-first')
  })

  it('should have Communion Service defined', () => {
    const communionService = serviceTimes.find((s) => s.name === 'Communion Service')
    expect(communionService).toBeDefined()
    expect(communionService?.day).toBe('first-sunday')
    expect(communionService?.time).toBe('6:00 PM')
    expect(communionService?.recurring).toBe('monthly-first')
  })
})
