# zotero-roamresearch-markdown
Translators for Zotero that play nice with RoamResearch. Works well with QuickCopy (ctrl-shift-c)

Two flavors exist:

RoamMarkdown Produces:
```
[Lindley et al., Researching AI Legibility through Design (2020)](zotero://select/items/0_Y6B9N325)
```

RoamMarkdownWithPage Produces
```
[Lindley et al., Researching AI Legibility through Design (2020)](zotero://select/items/1_Y6B9N325) #bib/lindleyResearchingAILegibility2020
```
For RoamMarkdownWithPage you'll need https://github.com/retorquere/zotero-better-bibtex to have auto generated bibtex citation keys that go into the hashtags.

# Installation
Place the .js files into the 'translators' folder of the Zotero Data Directory http://www.zotero.org/support/zotero_data#locating_your_zotero_library

If you want to use hashtags (RoamMarkdownWithPage), also install https://github.com/retorquere/zotero-better-bibtex

Restart Zotero for changes to take effect. Then select the corresponding exporter in the Preferences->Quick Copy->Default Format dialog.

Note: you can use the Zutilo add-on to define shortcuts for multiple quick copy formats.

# References used
- https://www.zotero.org/support/dev/translators
- https://gist.github.com/liob/6009553
- https://gist.github.com/clement-moulin-frier/0502aff4e9117cca8f5f9200f0eb4b0f
