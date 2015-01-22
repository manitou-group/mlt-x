# Manitou Experience

## Install Environment - Jekyll Project

### Ruby
Install RVM : https://rvm.io
Solve a lots of issues when multiple ruby versions have been installed.

```
$ \curl -sSL https://get.rvm.io | bash -s stable --ruby
```

### Jekyll
Install Jekyll : http://jekyllrb.com/

```
gem install jekyll
```

### Check version
You should check your installations :

```
$ which jekyll
/Users/Mateo/.rvm/gems/ruby-2.2.0/bin/jekyll
$ which gem
/Users/Mateo/.rvm/rubies/ruby-2.2.0/bin/gem
$ which ruby
/Users/Mateo/.rvm/rubies/ruby-2.2.0/bin/ruby
```



## Setup a new project (optional)
Run :

```
$ jekyll new project_dir
```



## i18n

### Install

Run : ```$ gem install jekyll-multiple-languages-plugin```

To activate the plugin add this line in to a *.rb file in the _plugins directory:

```
require 'jekyll/multiple/languages/plugin'
```

### Usage
##### Configuration
Add the i18n configuration to your _config.yml:

```
languages: ["sv", "en", "de", "fr"]
```

**Warning : YAML does not accept TAB characters (\t) for indentation.**



## Serve
Run : (watch files update by default except _config.yml)

```
$ jekyll serve
```



## Config (optional help)
Edit ```_config.yml``` you can add these elements :

```
# Server
source:           docs
destination:      _gh_pages
host:             0.0.0.0
port:             9001
url:              http://exemple.com
encoding:         UTF-8
```

Add ```Gemfile``` file with :

```
source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
```
