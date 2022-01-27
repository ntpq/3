ifndef network
override network = localhost
endif


.PHONY: action

action:
	echo network is $(network)
