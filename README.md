*[29 KAMIS](#kamis-glossary)
on 11/2/2020, 7:22:54 AM*

# kami.js

> Work on ideas.

![kami.js project pictogram](/_websites/en/_assets/logo.svg)

`kami.js` aims to explore the concepts of
**patterns and naming**.

You create virtual entities, [KAMIS](#kami),
to embody projects' classes, components and logic.

Quickly, it starts to **form a language** that
you can use to communicate with your collaborators.

### Table of content

* [What is `kami.js` ?](#what-is-kamijs-)
* [How to use `kami.js` ?](#how-to-use-kamijs-)
* [KAMIS glossary](#kamis-glossary)

### Browse some websites built on `kami.js`

* [imrok.fr](https://imrok.fr),
* [highbs-bok.art](https://highbs-bok.art),
* *soon, the `kami.js` documentation website*.


## What is `kami.js` ?

`kami.js` exposes a set of features which
help managing complexity in projects.

By finding multiple and relevant purposes to code,
as well as potent ways to interact with it,
it helps organizations to exponentially increase the
value of conception and development works.

### Project's keystone

Everything in `kami.js` is based on **words**.

**Words and their relations.**

[KAMIS](#kami) are words, in a context.
`kami.js` is a language made of KAMIS that
you can extend by adding KAMIS
and relations between them.

By connecting them, you create powerful
softwares, databases and knowledges.

Strongly implementing the DRY principle,
when you want to describes a property,
there is a high chance that the words you
use are already defined in the glossary and
implemented by the framework's and/or you
codebase.

### Different ways of connecting KAMIS

1. Import a KAMI as an ESM module and
consumes its features.

```javascript
/** ./dev-start.js */
import KAMI from './index.js'

KAMI.ave(
  import.meta.url,
  {
    log: true
  })
```

2. *(not implemented yet)* Describe
it with a relation property.

### List of features

#### 0. Development utilities

KAMIS abstract a lot of developement patterns
and can be used to manipulate occurences
of the concept they describe.

#### 1. Glossary

By retrieving the formalized concepts
of your projects, ie. built-in and
customized [KAMIS](#kamis),
you are able to create glossaries on
all your documentation platforms :
README, wiki, website.

*[Jump to README KAMIS' glossary section](#kamis-glossary).*

#### 2. Documentation

After retrieving, you can conditionaly shape
and render concepts that your project manipulate
in order to create relevant views for different
users and uses.

#### 3. Test

Check KAMIS instances and logics against
their specifications.

#### 4. Continuous deployment

Plug framework's features to CI/CD pipelines
through CLI commands.

## How to use `kami.js` ?

Here are details some [COMMANDS](#command),
framework's CLI entrypoints.

### Create a new KAMI

```bash
npm start -- create <scope : '' | ...> <kamiId: string>
```

Creates a new [KAMI](#kami) folders/files tree
at given scope, structured as follow :

```bash
<scope>
+-- /_shrine/
|   +-- <kamiId>
|   |   +-- _props
|   |   |   +-- names
|   |   |   |   +-- names.prop.js
|   |   |   +-- description
|   |   |   |   +-- description.prop.js
|   +-- <kamiId>.kami.js
```

#### Notes
* `names.prop.js` and `description.prop.js` are
pre-filled with temporary values.

You'll have to customize them through your IDE.

### Test the framework

```bash
npm start -- [-log] test
```

#### Notes
* `-log` prints all test assertions and results.

### Build the README

```bash
npm start -- -k readme build
```

#### Notes
* `-k` targets a specific [KAMI](#kami),
in this case [README](#readme),
* `build` is targeting the
README "build" [COMMAND](#command).

## KAMIS' glossary
    
* [BOOK](#book) : Book

  * [BOOK-EXTRACT](#book-extract) : Extract, Fragment, Atom

  * [BOOK-IMAGE](#book-image) : Image, Picture, Illustration, Scan

  * [BOOK-PAGE](#book-page) : Page

  * [BOOK-SECTION](#book-section) : Section, Chapter, Part
* [COMMAND](#command) : Command
* [DOC](#doc) : Documentation
* [FILE](#file) : File
* [FOLDER](#folder) : Folder
* [FOLDER-SCOPE](#folder-scope) : Scope, Périmètre
* [GET](#get) : Accesser, Obtain, Hydrater
* [ID](#id) : Identifier, instance name
* [INSTANCE](#instance) : Instance
* [KAMI](#kami) : Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva
* [LANG](#lang) : Language
* [OCCURENCE](#occurence) : Occurence
* [OCCURENCE](#occurence) : Unknown
* [PANTHEON](#pantheon) : Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven
* [PROP](#prop) : Property, Characteristics, Attribute
* [README](#readme) : README

  * [README-SECTION](#readme-section) : Section
* [ШRᛏGHN](#shrine) : Shrine
* [SPEC](#spec) : Specification
* [UTIL](#util) : Utility
* [WAY](#way) : Method, Action, Operation, Function
* [WEBAPP](#webapp) : Web application
* [WEBSITE](#website) : Website

  * [WEBSITE-PAGE](#website-page) : Page, Website page
* [WIKI](#wiki) : Wiki

## `book`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**BOOK** is a project specific KAMI.

It is known as :

* [en] Book,
* [fr] Livre.

### Description

**ORDERED COLLECTION OF WRITINGS**

A BOOK content is made of smaller [KAMIS](#kami)/bricks :

* [BOOK-SECTIONS](#book-section),
  which split BOOK content in chapters or sub-sections;
  
* [BOOK-PAGES](#book-page),
  actually representing a scanned sheet of paper,
  but could also hold expected BOOK page outcome;
  
* [BOOK-EXTRACTS](#book-extract),
  which hold an atomic fragment of BOOK content.
  
**Note that BOOK is a top-level section
with just some specific meta-data.**

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `regExp`
* `get`
* `provision`

### Occurences

**Count : 0.**

Matching regular expression :

`/^\/_data(.*)\/([\w|\-]*)\/([\w|\-]*)\.book\.js/`.




## `book-extract`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**BOOK-EXTRACT** is a project specific KAMI.

It is known as :

* [en] Extract, Fragment, Atom,
* [fr] Extrait, Fragment, Atome.

### Description

**BOOK EXTRACT**

A FRAGMENT is the smallest unit of [BOOK](#book) content.

It can be included inside a [SECTION](#section),
a [PAGE](#page) or directly on the BOOK root.

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 0.**

Matching regular expression :

`/\/_extracts\/(.*)\/(.*)\.extract\.js/`.




## `book-image`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**BOOK-IMAGE** is a project specific KAMI.

It is known as :

* [en] Image, Picture, Illustration, Scan,
* [fr] Image, Illustration, Numérisation.

### Description

**BOOK VISUAL CONTENT**

Usually bound to a [WEBSITE-PAGE](#website-page) page,
BOOK-IMAGES are given in a [BOOK-SECTION](#book-section),
a [BOOK-EXTRACT](#book-extract) or in a [BOOK-PAGE](#book-page).

When the BOOK-PAGE, BOOK-EXTRACT or BOOK-SECTION is retrieved,
scoped BOOK-IMAGES are copied to the destination WEBSITE-PAGE folder.

### Properties

**Count: 5.**

* `id`
* `names`
* `description`
* `regExp`
* `copy`

### Occurences

**Count : 10.**

Matching regular expression :

`/\.(png|jpg|svg)$/`.

* [`/logo.svg`](/logo.svg)
* [`/_shrine/kami/kami.picto.svg`](/_shrine/kami/kami.picto.svg)
* [`/_shrine/lang/lang.picto.svg`](/_shrine/lang/lang.picto.svg)
* [`/_shrine/prop/prop.picto.svg`](/_shrine/prop/prop.picto.svg)
* [`/_shrine/readme/readme.picto.svg`](/_shrine/readme/readme.picto.svg)
* [`/_shrine/shrine/shrine.picto.svg`](/_shrine/shrine/shrine.picto.svg)
* [`/_shrine/util/util.picto.svg`](/_shrine/util/util.picto.svg)
* [`/_websites/en/_assets/favicon.svg`](/_websites/en/_assets/favicon.svg)
* [`/_websites/en/_assets/logo.svg`](/_websites/en/_assets/logo.svg)
* [`/_websites/en/_assets/star-logo.svg`](/_websites/en/_assets/star-logo.svg)


## `book-page`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**BOOK-PAGE** is a project specific KAMI.

It is known as :

* [en] Page,
* [fr] Page.

### Description

**PHYSICAL CONTENT FRAGMENT**

PAGE can hold [SECTIONS](#section)
and [EXTRACTS](#extracts).

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `regExp`
* `get`
* `provision`

### Occurences

**Count : 0.**

Matching regular expression :

`/\/_pages\/(.*)\/(.*)\.page\.js/`.




## `book-section`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**BOOK-SECTION** is a project specific KAMI.

It is known as :

* [en] Section, Chapter, Part,
* [fr] Section, Chapitre, Partie.

### Description

**BOOK SUB-DIVISION**

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `regExp`
* `get`
* `provision`

### Occurences

**Count : 0.**

Matching regular expression :

`/^\/_data\/(.*)\/_sections\/(.*)\/(.*)\.section\.js/`.




## `command`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**COMMAND** is a project specific KAMI.

It is known as :

* [en] Command,
* [fr] Commande.

### Description

**KAMI WAYS CLI INTERFACE**

Basically, a command bind a [`way`](#way) method
to match [`KAMI`](#kami) CLI entrypoint syntax.

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 4.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_props\/_commands\/(.*)\/(.*).command.js/`.

* [`/_shrine/kami/_props/_commands/create/create.command.js`](/_shrine/kami/_props/_commands/create/create.command.js)
* [`/_shrine/kami/_props/_commands/test/test.command.js`](/_shrine/kami/_props/_commands/test/test.command.js)
* [`/_shrine/readme/_props/_commands/build/build.command.js`](/_shrine/readme/_props/_commands/build/build.command.js)
* [`/_shrine/website/_props/_commands/build/build.command.js`](/_shrine/website/_props/_commands/build/build.command.js)


## `doc`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**DOC** is a project specific KAMI.

It is known as :

* [en] Documentation,
* [fr] Documentation.

### Description

**TOP-LEVEL DOCUMENTATION KAMI**

DOC is composed of few sub-KAMIS :
* [README](#readme),
* [WIKI](#wiki),
* [WEBSITE](#website).

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `file`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**FILE** is a project specific KAMI.

It is known as :

* [en] File,
* [fr] Fichier.

### Description

**File meta-data**

*Pattern should later be extended depending on
the file extension.*

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `create`
* `get`
* `copy`


## `folder`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**FOLDER** is a project specific KAMI.

It is known as :

* [en] Folder,
* [fr] Dossier.

### Description

**Folder meta-data**

Folder is represented by :
* Its `scope`, the path between project root
  and desired folder location,
* Its `name`, an unique identifier in its scope,
* Its `tree`, an object representing folders and
  files hierarchy inside top-level folder
  (a complex concept to define).


### Properties

**Count: 7.**

* `id`
* `names`
* `description`
* `create`
* `copy`
* `clear`
* `_specs`


## `folder-scope`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**FOLDER-SCOPE** is a project specific KAMI.

It is known as :

* [en] Scope, Périmètre,
* [fr] Portée, Perimeter.

### Description

SUB-FOLDER TREE

In a FS representation, the scope
is the root folder, or a sub-folder.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `get`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**GET** is a project specific KAMI.

It is known as :

* [en] Accesser, Obtain, Hydrater,
* [fr] Accesseur, Obtenir, Hydrateur.

### Description

**INSTANCE ACCESSERS**

GET is currently an abstract pattern
which may be implemented on sufficent
occurence rate and generic logics.

GET can declined on KAMI's occurences purposes :
* Access and update folders and files content,
* Import ESM modules,
* Access and update data from databases.

In any case, an object instance is created to
represent the actual occurence.

In the case of folders and files,
a regular expression is used for matching.


### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 7.**

Matching regular expression :

`/(.*)\/_shrine\/(.*)\/_ways\/get\/get.way.js/`.

* [`/_shrine/book/_shrine/page/_ways/get/get.way.js`](/_shrine/book/_shrine/page/_ways/get/get.way.js)
* [`/_shrine/book/_shrine/section/_ways/get/get.way.js`](/_shrine/book/_shrine/section/_ways/get/get.way.js)
* [`/_shrine/book/_ways/get/get.way.js`](/_shrine/book/_ways/get/get.way.js)
* [`/_shrine/file/_ways/get/get.way.js`](/_shrine/file/_ways/get/get.way.js)
* [`/_shrine/instance/_ways/get/get.way.js`](/_shrine/instance/_ways/get/get.way.js)
* [`/_shrine/kami/_ways/get/get.way.js`](/_shrine/kami/_ways/get/get.way.js)
* [`/_shrine/readme/_ways/get/get.way.js`](/_shrine/readme/_ways/get/get.way.js)


## `id`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**ID** is a project specific KAMI.

It is known as :

* [en] Identifier, instance name,
* [fr] Identifieur, nom d'instance.

### Description

INSTANCE NAME

For a given MOTIF and given SCOPE,
the ID is the unique name of an instance.

It is usually a PROP.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `instance`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**INSTANCE** is a project specific KAMI.

It is known as :

* [en] Instance,
* [fr] Instance.

### Description

**INDIVIDUAL OF ONE OR MULTIPLE KAMIS**

Instances are occurence of a [KAMI](#kami) (pattern).

They usually :
* Can be retrieved through [`<kami>.get`] way,
* Can be created through [`<kami>.create`] way,
* Can be tested through [`<kami>.test`] way,
* *(Not implemented) Can get updated and deleted*.

[KAMIS](#kami) (`<...>.kami.js`) are instances of KAMI-KAMI.

**KAMI-KAMI is an instance of itself !**

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `get`


## `kami`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**KAMI** is a project specific KAMI.

It is known as :

* [en] Concept, Idea, Word, Pattern, Spirit, God, Angel, Deva,
* [fr] Concept, Idée, Mot, Motif, Esprit, Dieu, Ange, Deva.

### Description

**The KAMI of KAMIS.**

Kami are "enlived" patterns, making them
not only **generative** but also **evolutive**
in a similar way classes and objects are.

### Properties

**Count: 13.**

* `id`
* `names`
* `description`
* `regExp`
* `flavour`
* `_commands`
* `create`
* `get`
* `cli`
* `test`
* `specs`
* `_specs`
* `ave`

### Occurences

**Count : 29.**

Matching regular expression :

* `/(.*)\/_motifs\/(.*)\/(.*).motif.js/`,
* `/(.*)\/_shrine\/(.*)\/(.*).kami.js/`.

* [`/_motifs/folder-scope/folder-scope.motif.js`](/_motifs/folder-scope/folder-scope.motif.js)
* [`/_motifs/id/id.motif.js`](/_motifs/id/id.motif.js)
* [`/_motifs/occurence/occurence.motif.js`](/_motifs/occurence/occurence.motif.js)
* [`/_motifs/webapp/webapp.motif.js`](/_motifs/webapp/webapp.motif.js)
* [`/_shrine/book/book.kami.js`](/_shrine/book/book.kami.js)
* [`/_shrine/book/_shrine/extract/extract.kami.js`](/_shrine/book/_shrine/extract/extract.kami.js)
* [`/_shrine/book/_shrine/image/image.kami.js`](/_shrine/book/_shrine/image/image.kami.js)
* [`/_shrine/book/_shrine/page/page.kami.js`](/_shrine/book/_shrine/page/page.kami.js)
* [`/_shrine/book/_shrine/section/section.kami.js`](/_shrine/book/_shrine/section/section.kami.js)
* [`/_shrine/command/command.kami.js`](/_shrine/command/command.kami.js)
* [`/_shrine/doc/doc.kami.js`](/_shrine/doc/doc.kami.js)
* [`/_shrine/file/file.kami.js`](/_shrine/file/file.kami.js)
* [`/_shrine/folder/folder.kami.js`](/_shrine/folder/folder.kami.js)
* [`/_shrine/get/get.kami.js`](/_shrine/get/get.kami.js)
* [`/_shrine/instance/instance.kami.js`](/_shrine/instance/instance.kami.js)
* [`/_shrine/kami/kami.kami.js`](/_shrine/kami/kami.kami.js)
* [`/_shrine/lang/lang.kami.js`](/_shrine/lang/lang.kami.js)
* [`/_shrine/occurence/occurence.kami.js`](/_shrine/occurence/occurence.kami.js)
* [`/_shrine/pantheon/pantheon.kami.js`](/_shrine/pantheon/pantheon.kami.js)
* [`/_shrine/prop/prop.kami.js`](/_shrine/prop/prop.kami.js)
* [`/_shrine/readme/readme.kami.js`](/_shrine/readme/readme.kami.js)
* [`/_shrine/readme/_shrine/section/section.kami.js`](/_shrine/readme/_shrine/section/section.kami.js)
* [`/_shrine/shrine/shrine.kami.js`](/_shrine/shrine/shrine.kami.js)
* [`/_shrine/spec/spec.kami.js`](/_shrine/spec/spec.kami.js)
* [`/_shrine/util/util.kami.js`](/_shrine/util/util.kami.js)
* [`/_shrine/way/way.kami.js`](/_shrine/way/way.kami.js)
* [`/_shrine/website/website.kami.js`](/_shrine/website/website.kami.js)
* [`/_shrine/website/_shrine/page/page.kami.js`](/_shrine/website/_shrine/page/page.kami.js)
* [`/_shrine/wiki/wiki.kami.js`](/_shrine/wiki/wiki.kami.js)

### Flavour

At the very beginning,
KAMI-KAMI **said itself**, to be
brought to existence.

Soon after, it started to speak out other KAMIS,
which were instantly brought to existence too, following
a pure nodal self-organization.

For the generation to proceed, KAMI-KAMI first had to
split itself in two : the KAMI concept and the
KAMI individual. The class and the instance.

It was also about genericity and specificity.
And, at the end, dualism.

KAMI-KAMI had to become a KAMI like the others KAMIS.
It needed to be processed the same way to ensure
genericity.

But its specifity, the secrets of its generative powers, remained
absent of other KAMIS. This was the key of peace.

By doing so, KAMI-KAMI shared the same common nature,
**the pattern**, to all of its creations [the kamis],
letting them freely **extend and implement** its
highly abstract powers.


## `lang`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**LANG** is a project specific KAMI.

It is known as :

* [en] Language,
* [fr] Langage.

### Properties

**Count: 2.**

* `id`
* `names`


## `occurence`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**OCCURENCE** is a project specific KAMI.

It is known as :

* [en] Occurence,
* [fr] Occurence.

### Description

WHERE INSTANCES HAPPEN

Occurence defines the apparition rules
(matching properties)
of a MOTIF'S INSTANCE.


### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `occurence`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**OCCURENCE** is a project specific KAMI.

It is known as :

* [en] Unknown,
* [fr] Inconnu.

### Description

New KAMI !

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `pantheon`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PANTHEON** is a project specific KAMI.

It is known as :

* [en] Pantheon, Primordial shrine, Valhalla, Mount Olympus, Acropolis, Heaven,
* [fr] Panthéon, Sanctuaire primordial, Valhalla, Mont Olympe, Acropole, Paradis.

### Description

**SHRINE OF PRIMORDIAL KAMIS**

There lies the most abstract and/or transverse [KAMIS](#kami),
the angels and last steps upon the One.

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 0.**

Matching regular expression :

`/kami.js\/_shrine$/`.




## `prop`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**PROP** is a project specific KAMI.

It is known as :

* [en] Property, Characteristics, Attribute,
* [fr] Propriété, Caractéristque, Attribut.

### Description

`_props` folders contains
[kami](#kami)'s properties content.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `readme`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**README** is a project specific KAMI.

It is known as :

* [en] README,
* [fr] README.

### Description

**GITHUB README**

README instance occurs once by [PROJECT](#project),
in the `/_readme folder`.

Specific PROJECT's README [SECTIONS](#sections) are
located in `/_readme/_sections`,
genercis are located in `/kami.js/_shrine/readme/_sections`.

README is a component of [DOC](#-doc).

### Properties

**Count: 6.**

* `id`
* `names`
* `description`
* `get`
* `build`
* `_commands`


## `readme-section`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**README-SECTION** is a project specific KAMI.

It is known as :

* [en] Section,
* [fr] Section.

### Description

**README SECTION**

SECTIONS are made of :
* Text content,
* Imbricated SECTIONS.

In fact, README is the top-level SECTION.

### Properties

**Count: 5.**

* `id`
* `names`
* `description`
* `regExp`
* `create`

### Occurences

**Count : 5.**

Matching regular expression :

* `/^\/_readme\/_sections\/(.*)\/(.*)\.section.js/`,
* `/\/_shrine\/readme\/_sections\/(.*)\/(.*)\.section.js/`.

* [`/_readme/_sections/1_intro/intro.section.js`](/_readme/_sections/1_intro/intro.section.js)
* [`/_readme/_sections/2_what_is/what_is.section.js`](/_readme/_sections/2_what_is/what_is.section.js)
* [`/_readme/_sections/3_how_to/how_to.section.js`](/_readme/_sections/3_how_to/how_to.section.js)
* [`/_shrine/readme/_sections/kami/kami.section.js`](/_shrine/readme/_sections/kami/kami.section.js)
* [`/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js`](/_shrine/readme/_sections/kamis_glossary/kamis_glossary.section.js)


## `shrine`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**ШRᛏGHN** is a project specific KAMI.

It is known as :

* [en] Shrine,
* [fr] Sanctuaire.

### Properties

**Count: 4.**

* `id`
* `names`
* `create`
* `regExp`

### Occurences

**Count : 4.**

Matching regular expression :

`/(.*)\/_shrine$/`.

* [`/_shrine`](/_shrine)
* [`/_shrine/book/_shrine`](/_shrine/book/_shrine)
* [`/_shrine/readme/_shrine`](/_shrine/readme/_shrine)
* [`/_shrine/website/_shrine`](/_shrine/website/_shrine)


## `spec`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**SPEC** is a project specific KAMI.

It is known as :

* [en] Specification,
* [fr] Spécification.

### Description

**KAMIS' TEST MATERIAL**

In `kami.js` we currently distinguish two
categories of specifications :

* **Instances SPECS**, which target every
  instances of a KAMI (hold by the KAMI),
* **Specific SPECS**, which target a single
  instance of a KAMI (hold by the instance).

### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `regExp`

### Occurences

**Count : 3.**

Matching regular expression :

`/(.*)\/(.*)\/_props\/(_specs|specs)\/(.*)\/(.*).spec.js/`.

* [`/_shrine/kami/_props/specs/props/props.spec.js`](/_shrine/kami/_props/specs/props/props.spec.js)
* [`/_shrine/kami/_props/_specs/regExp/regExp.spec.js`](/_shrine/kami/_props/_specs/regExp/regExp.spec.js)
* [`/_shrine/website/_props/_specs/regExp/regExp.spec.js`](/_shrine/website/_props/_specs/regExp/regExp.spec.js)


## `util`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**UTIL** is a project specific KAMI.

It is known as :

* [en] Utility,
* [fr] Utilitaire.

### Description

`_utils` folders are nothing more than
the place very specific snippets of code are put.

Utility are usually consumed by same scope-level modules.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `way`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**WAY** is a project specific KAMI.

It is known as :

* [en] Method, Action, Operation, Function,
* [fr] Méthode, Action, Opération, Fonction.

### Description

**KAMI POWERS**

Ways are KAMI's methods
(... actions, functions, operations).

It differs with [prop](#prop) in its type,
which is necessarely `function`.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `webapp`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**WEBAPP** is a project specific KAMI.

It is known as :

* [en] Web application,
* [fr] Application web.

### Description

The dynamic WEBSITE backend

A webapp exposes MOTIFS and their operations
(customs and generics) as endpoints.

### Properties

**Count: 3.**

* `id`
* `names`
* `description`


## `website`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**WEBSITE** is a project specific KAMI.

It is known as :

* [en] Website,
* [fr] Site internet.

### Description

**KAMI.JS DOCUMENTATION WEBSITE**

WEBSITE is a [DOC](#doc) component.

### Properties

**Count: 8.**

* `id`
* `names`
* `regExp`
* `regExpMapping`
* `description`
* `build`
* `_commands`
* `_specs`

### Occurences

**Count : 1.**

Matching regular expression :

`/^\/_websites\/(.*)\/(.*).website.js/`.

* [`/_websites/en/en.website.js`](/_websites/en/en.website.js)


## `website-page`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**WEBSITE-PAGE** is a project specific KAMI.

It is known as :

* [en] Page, Website page,
* [fr] Page, Page de site internet.

### Description

TEMPLATE x DATA x URL

A page binds the following three elements :
* A template which render conditionnaly
  on specific data,
* Data to be consumed by the template,
* An path to be render
  (which will in time be used as its url).


### Properties

**Count: 4.**

* `id`
* `names`
* `description`
* `create`


## `wiki`

[*Return to KAMIS' glossary.*](#kamis-glossary)

**WIKI** is a project specific KAMI.

It is known as :

* [en] Wiki,
* [fr] Wiki.

### Description

**KAMI.JS' GITHUB WIKI**

WIKI is a component of [DOC](#doc).

### Properties

**Count: 3.**

* `id`
* `names`
* `description`
