#WakandaDB.org#
===================

##About##
This repository builds the <a href="http://wakandadb.org">wakandadb.org</a> website presenting the **WakandaDB Model-driven NoSQL engine**. This website is using Github pages, you can also reach it from <a href="http://wakandadb.github.io">wakandadb.github.io</a>.

WakandaDB provides a native **REST API** to access interconnected DataClasses defined in **Server-Side JavaScript**.
WakandaDB is the server within Wakanda which includes a deticated, but not mandatory, Ajax Framework, and a dedicated IDE. You can find more informations about them on <a href="http://wakanda.org">wakanda.org</a>.

The REST API of WakandaDB makes it a very accessible Database from any environment supporting HTTP, meaning either from Server Languages (PHP, Java, .NET, …), Browser frameworks (Backbone.js, Angular, Dojo, Sencha, …), or Native Mobile Clients (iOS, Android, Windows Phone, ...)

##Contributing##

If you want to crontribute to this Website, suggesting code examples of WakandaDB access from any framework, platform, or tool, or suggesting to references some modules or applications using WakandaDB or usable from WakandaDB, feel free to create an issue, send a pull request, or contact us directly at <a href="http://github.com/lyle">@lyle</a> and <a href="mailto:alex@wakanda.org">alex@wakanda.org</a>


## Installing a Dev version of this Site

Start by installing the following....

* Ruby (v1.9.2 or higher)
* RubyGems (v1.8.24 or higher)
* Bundler (v1.2.0.pre.1 or higher)

We are using Jekyll, Less, Pygments, Markdown

* Pygments for code highlighting...

Assuming you have python installed with `easy_install` available:

    sudo easy_install Pygments

* Set up Bundler to get gems and such

Bundler will install the gems that are in the Gemfile
And put them in a sub folder (not in repo)

    bundle install --path _vendor/bundle
    
Then to install all the gems in the Gemfile run

    bundle install
    

## Rake deploy task

The following tasks are available (use `rake -T` to list them):

    rake build        # Build site with Jekyll
    rake check_links  # Check links for site already running on localhost:4000
    rake clean        # Clean up generated site
    rake deploy       # Build and deploy
    rake server       # Start server with --auto

The deploy task is simplistic and uses rsync to copy the generated site to your server.  You will need to replace the username, servername and path as appropriate. For this site we do not deploy, because we are using Github pages which does the build for us.
