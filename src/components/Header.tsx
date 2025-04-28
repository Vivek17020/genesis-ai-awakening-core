
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Bell, BarChart, Menu } from 'lucide-react';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger
} from '@/components/ui/drawer';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-ai-primary/80 border-b border-ai-cyan/10">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <div className="text-xl font-bold tracking-tight text-white">
            <Shield className="inline-block mr-2 text-ai-cyan" />
            <span className="text-ai-cyan">Sentinel</span> AI
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#features" className="text-gray-300 hover:text-ai-cyan transition-colors">Features</a>
          <a href="#technology" className="text-gray-300 hover:text-ai-cyan transition-colors">Technology</a>
          <a href="#architecture" className="text-gray-300 hover:text-ai-cyan transition-colors">Architecture</a>
          <a href="#demo" className="text-gray-300 hover:text-ai-cyan transition-colors">Demo</a>
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <Menu />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-ai-primary border-t border-ai-cyan/10">
              <div className="flex flex-col p-4 space-y-4">
                <a href="#features" className="text-gray-300 hover:text-ai-cyan transition-colors p-2">Features</a>
                <a href="#technology" className="text-gray-300 hover:text-ai-cyan transition-colors p-2">Technology</a>
                <a href="#architecture" className="text-gray-300 hover:text-ai-cyan transition-colors p-2">Architecture</a>
                <a href="#demo" className="text-gray-300 hover:text-ai-cyan transition-colors p-2">Demo</a>
                <DrawerClose asChild>
                  <Button variant="outline" className="border-ai-cyan/50 text-ai-cyan hover:bg-ai-cyan/10 mt-2">
                    Close
                  </Button>
                </DrawerClose>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm" className="border-ai-cyan/50 text-ai-cyan hover:bg-ai-cyan/10">
            <Bell className="mr-2 h-4 w-4" />
            Demo Alert
          </Button>
          <Button size="sm" className="bg-ai-cyan text-ai-primary hover:bg-ai-cyan/90">
            <BarChart className="mr-2 h-4 w-4" />
            Dashboard
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
