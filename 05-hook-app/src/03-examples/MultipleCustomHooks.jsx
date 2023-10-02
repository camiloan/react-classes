import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      {/* isLoading ? (
        <div className='alert alert-info text-center'>Loading</div>
      ) : (
        <blockquote className='blockquote text-end'>
          <p className='mb-2'>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      ) */}

      <button
        className='btn btn-primary'
        disabled={isLoading}
        onClick={() => increment(1)}
      >
        Next quote
      </button>
    </>
  );
};
