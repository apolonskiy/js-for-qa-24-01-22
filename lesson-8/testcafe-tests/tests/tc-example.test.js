import {t, Selector} from 'testcafe';

fixture('Testcafe example page tests')
    .page('https://devexpress.github.io/testcafe/example/')
    .beforeEach(async () => {
        await t.maximizeWindow();
    })

test.meta({
    testOwner: 'QA'
})('Verify work with checkboxes', async () => {
    await t.expect(Selector('[data-testid="remote-testing-checkbox"]').checked).notOk();
    await t.click(Selector('[data-testid="remote-testing-checkbox"]'));
    await t.expect(Selector('[data-testid="remote-testing-checkbox"]').checked).ok('Test failed on checkbox checked');
})

test.meta({
    testOwner: 'Dev'
})('Verify slider work', async () => {
    await t.click(Selector('[data-testid="tried-testcafe-checkbox"]'));
    await t.expect(Selector('div[id="slider"] span').getAttribute('style')).eql('left: 0%;');
    // await t.dragToElement(Selector('div[id="slider"] span'), Selector('div[class="slider-value"]').withText('4'));
    const width = await Selector('[id="slider"]').clientWidth;
    await t.drag(Selector('div[id="slider"] span'), Math.ceil(width/2), 0);
    await t.expect(Selector('div[id="slider"] span').getAttribute('style')).eql('left: 44.4444%;');
})

test('Verify select options', async () => {
    const getSelectedText = async (
        element,
        subSelector  = 'option'
      ) => {
        const parentSelector = Selector(element);
        const selectedSelector = await parentSelector
          .find(subSelector)
          .filter(node => node?.selected)
          .nth(0);
        const text = (await selectedSelector.textContent).trim();
        return text;
      }

      await t.click(Selector('[data-testid="preferred-interface-select"]'))
            .click(Selector('option').withExactText('Both'));
    await t.expect(await getSelectedText('[data-testid="preferred-interface-select"]')).eql('Both');
    
})