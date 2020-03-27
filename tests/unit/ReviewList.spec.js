import ReviewList from '@/components/ReviewList'
import { mount } from '@vue/test-utils'
import { getReviews } from '@/services/axios'

jest.mock('@/services/axios')

describe('ReviewList', () => {
  beforeEach(() => {
    jest.resetModules() // is this necessary?
    jest.clearAllMocks()
  })

  it('Calls getReviews once and displays reviews', async () => {
    const mockReviews = ['good', 'great', 'decent']
    getReviews.mockResolvedValueOnce(mockReviews)

    const wrapper = mount(ReviewList)

    // where do I await?

    expect(getReviews).toHaveBeenCalledTimes(1)
    expect(getReviews).toHaveBeenCalledWith()

    const displayedReviews = wrapper.find('[data-testid="review-list"]').element
      .textContent
    expect(displayedReviews).toEqual(mockReviews)
  })

  it('Displays an error when getReviews call fails', async () => {
    const mockError = 'Oops! Something went wrong'
    getReviews.mockRejectedValueOnce(mockError)

    const wrapper = mount(ReviewList)

    // where do I await?
    expect(getReviews).toHaveBeenCalledTimes(1)
    expect(getReviews).toHaveBeenCalledWith()

    const displayedError = wrapper.find('[data-testid="review-error"]').element
      .textContent
    expect(displayedError).toEqual(mockError)
  })
})
