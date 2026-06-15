import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, X, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function FloatingChat() {
  const [open, setOpen] = useState(false);

  const chats = [
    "Website Project",
    "Marketing Campaign",
    "Dashboard Setup",
    "Support Chat",
    "React Help",
  ];

  return (
    <>
      {/* Floating Button */}

      <AnimatePresence>
        {!open && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-20 right-20 z-50"
          >
            <Button
              size="icon"
              onClick={() => setOpen(true)}
              className="h-12.5 w-12.5 rounded-full shadow-xl"
            >
              <MessageSquare className="h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanded Chat */}

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{
                width: 50,
                height: 50,
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                width: 800,
                height: 600,
                opacity: 1,
                scale: 1,
              }}
              exit={{
                width: 50,
                height: 50,
                opacity: 0,
                scale: 0.8,
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2"
            >
              <Card className="h-full overflow-hidden p-0 shadow-2xl">
                <div className="flex h-full">
                  {/* Sidebar */}

                  <div className="w-65 border-r bg-muted/30">
                    <div className="border-b p-4 font-semibold">
                      Recent Chats
                    </div>

                    <ScrollArea className="h-135">
                      <div className="space-y-2 p-3">
                        {chats.map((chat) => (
                          <Button
                            key={chat}
                            variant="ghost"
                            className="w-full justify-start"
                          >
                            {chat}
                          </Button>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>

                  {/* Chat Area */}

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                      <h3 className="font-semibold">
                        AI Assistant
                      </h3>

                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setOpen(false)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <ScrollArea className="flex-1">
                      <div className="space-y-4 p-4">
                        <div className="max-w-[80%] rounded-xl bg-muted p-3">
                          Hello 👋 How can I help you?
                        </div>

                        <div className="ml-auto max-w-[80%] rounded-xl bg-primary p-3 text-primary-foreground">
                          Help me create a dashboard.
                        </div>
                      </div>
                    </ScrollArea>

                    <div className="border-t p-4">
                      <div className="flex gap-2">
                        <Input placeholder="Type your message..." />

                        <Button size="icon">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}