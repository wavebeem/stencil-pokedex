import { newE2EPage } from '@stencil/core/testing';

describe('app-pkmn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-pkmn></app-pkmn>');

    const element = await page.find('app-pkmn');
    expect(element).toHaveClass('hydrated');
  });
});
