import Container from './shared/Container';

export function Footer() {
  return (
    <footer className="tw-bg-white tw-border-t">
      <Container>
        <div className="md:tw-order-1 md:tw-mt-0">
          <p className="tw-text-center tw-text-base tw-text-gray-400">
            &copy; 2022 embrycode. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
